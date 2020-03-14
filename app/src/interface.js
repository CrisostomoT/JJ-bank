const a = require('./sesion.js')

document.getElementById('sesion').addEventListener('submit', function () {
    event.preventDefault();
    let email = inputEmail.value;
    let password = inputPassword.value;
    let ban = 0;
    const datos = JSON.parse(localStorage.getItem("datosIngresados"));
    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        if (datos[index].Email == email && datos[index].Password == password) {
            alert("Bienvenido " + datos[index].Nombre);
            localStorage.setItem("datoUsuaarioActual", JSON.stringify(datos[index].Email));
            location.href = "profile.html";
            // document.getElementById("usuarionav").innerHTML.value =datos[index].Nombre;
            ban = 1;
        }
    }
    if (ban == 0) {
        alert("Usuario o Contraseña incorrectos!");
    }
});

