class User {
    users;
    constructor() {
        this.users = [
            { "user": "tipti", "pass": "pass123" },
            { "user": "grupo", "pass": "abc123" }
        ]
    }

    verificarAcceso() {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var mensaje = document.getElementById("mensajeError");
        var existe = this.users.find(x => x.user === user && x.pass === pass);
        
        if (existe) {
            mensaje.style.visibility = 'hidden';
            window.location.href = "reproductor.html";
        } else {
            mensaje.innerHTML = `<p>Usuario o contraseña incorrectas. Intente nuevamente.</p>`;
            mensaje.style.visibility = 'visible';
        }
    }
    
}

var userInstance = new User();
