const botonNav = document.querySelector (".boton-nav")
const navMenu = document.querySelector (".nav-menu")

botonNav.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Gracias por contactarme, te respondere pronto!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Hay un error en el formulario"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Hay un error en el formulario"
      });
    }
    form.addEventListener("submit", handleSubmit)