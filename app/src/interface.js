const a = require('./sesion.js')

// DOM
document.getElementById('sesion').addEventListener('submit', function () {
    event.preventDefault();
    let mail = inputEmail.value;
    let password = inputPassword.value;
    datos=['juan@gmail','1234'];
    localStorage.setItem('datosRegistrados', JSON.stringify(datos));

    let datos = JSON.parse(localStorage.getItem("datosRegistrados"));
    console.log('datos'+datos);
    if (datos.indexOf(mail) != -1 && datos.indexOf(password) != -1) {
        alert("Bienvenido");
        location.href = "profile.html";
    } else {
        alert("Usuario o Contraseña incorrectos!");
    };
})




