const listaDeUsuarios = [
    { user: "profesor", password: "1234" },
    { user: "alumno", password: "1234" },
    { user: "admin", password: "1234" }
];

function login() {
    var user, password;
    var usuarioCorrecto = false;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasenya").value;

    for (let i = 0; i < listaDeUsuarios.length; i++) {
        const usuario = listaDeUsuarios[i];

        if (usuario.user === user && usuario.password === password) {
            usuarioCorrecto = true;

            if (usuario.user === "profesor") {

                window.location = "profesor.html";

            } else if (usuario.user === "alumno") {

                window.location = "alumno.html";


            } else if (usuario.user === "admin") {

                window.location = "admin.html";
                
            }
        }
    }

    if (!usuarioCorrecto) {
        alert("Usuario o contraseña incorrectos");
    }
}

function redireccion() {
    window.location.href = "registro.html";
}

