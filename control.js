var form = document.querySelector("form")
var button = document.getElementById("button");
var user = document.getElementById("user");
var password = document.getElementById("pw");

function validar() {

    if (user.value == "") {
        alert("Ingrese usuario")
    } else if (pw.value == "") {
        alert("Ingrese contraseña")
    } else if (!/\S+@\S+/.test(user)) {
        alert("Falta el arroba en el usuario")
    } else {
        alert("Sus datos se enviaron correctamente")
    }
}

/*  */