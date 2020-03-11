

const usuariosRegistrados = JSON.parse(localStorage.getItem("datosIngresados")) || [
  
];


  function hacerRegister() {
  // console.log('HOLA')
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const genero = document.getElementById('genero').value;
  const documento = document.getElementById('documento').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword4').value;
  const direccion = document.getElementById('inputAddress').value;
  const ciudad = document.getElementById('inputCity').value;
  const provincia = document.getElementById('provincia').value;
  const codigoPostal = document.getElementById('inputZip').value;
  usuariosRegistrados.push({
        Nombre : nombre,
        Apellido : apellido,
        Genero : genero,
        Documento : documento,
        Telefono : telefono,
        Email : email,
        Password : password,
        Direccion : direccion,
        Ciudad : ciudad,
        Provincia : provincia,
        CodigoPostal : codigoPostal
     })
 localStorage.setItem('datosIngresados', JSON.stringify(usuariosRegistrados))
  validarRegister(email);
}

function validarRegister(email) {
  for (let i = 0; i < usuariosRegistrados.length; i++) {
   let usuarioreg = usuariosRegistrados[i];
     
    if (email == usuarioreg.Email) {
     alert("Tu ya te encuentras registrado! ");
   break
      return
     
    }
   else{
    alert("Registro Exitoso");
    break
    return
   }

    console.log(email);
    console.log(usuarioreg.Email);
  }

  
} 