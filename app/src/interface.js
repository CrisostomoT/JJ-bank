<<<<<<< HEAD
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
=======
// const a = require('./sesion.js')

// // DOM
// let datos = JSON.parse(localStorage.getItem("datosIngresados")) ªª;

// document.getElementById('sesion').addEventListener('submit', function () {
//     event.preventDefault();
//     let mail = document.getElementById("inputEmail").value;
//     let password = documet.getElementById("inputPassword").value;
//     datos.push({
//         Email: mail,
//         Password: password,

//     }) 
   
//     localStorage.setItem('datosIngresados', JSON.stringify(datos));
 
    
    
      
//     if (datos.indexOf(mail) != -1 && datos.indexOf(password) != -1) {
//         alert("Bienvenido");
//         location.href = "profile.html";
//     } else {
//         alert("Usuario o Contraseña incorrectos!");
//     };
// })





>>>>>>> a2fc29b398f7b307d10448bf2746d146fa0d21df

