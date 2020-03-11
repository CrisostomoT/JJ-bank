import usuariosRegistrados from '../'

let NuevasSolicitudes = [{
    nombre: "Maxi",
    apellido: "Estrada",
    dni: "2325522452",
    email: "max@gmail.com",
    direccion: "mi casa",
    ciudad: "S M Tuc",
    provincia: "Tuc"
  },
  {
    nombre: "Diego",
    apellido: "Olmi",
    dni: "23255dssdf22452",
    email: "diego@gmail.com",
    direccion: "mi casa",
    ciudad: "S M Tuc",
    provincia: "Tuc"
  },
  {
    nombre: "Elsa",
    apellido: "Estrada",
    dni: "2325522452",
    email: "elsa@gmail.com",
    direccion: "mi casa",
    ciudad: "S M Tuc",
    provincia: "Tuc"
  }
]
let NuevosClientes = [];
const ulSolicitudes = document.getElementById("clientes");

// function aprobarCliente(index) {
//   console.log('sdf')
//   const cliente = NuevasSolicitudes[index];
//   NuevosClientes.push(cliente);
//   NuevasSolicitudes.splice(index, 1);
//   listarSolicitudes();
//   listarClientes();

// }




const CardCliente = (cliente, index) => `
                <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.dni}</td>
                <td>${cliente.email}</td>
                <td>${cliente.direccion}</td>
                <td>${cliente.ciudad}</td>
                <td>${cliente.provincia}</td>
                <td><button type="button" id="btnAprobar${index}"  data-index="${index}" class="btn btn-outline-warning">Aprobar</button>
                <button type="button" id="desaprobarCliente${index}"  class="btn btn-outline-danger">Denegar</button></td>
                </tr>`;




const eliminarCliente = (index) => {
  NuevosClientes.splice(index, 1);
  listarClientes();
}


const listadoClientes = document.getElementById('listaClientes')

const listarClientes = () => {
  listadoClientes.innerHTML = '';
  NuevosClientes.forEach(function (cliente, index) {
    listadoClientes.innerHTML += `
      <tr>
      <td>${cliente.nombre}</td>
      <td>${cliente.apellido}</td>
      <td>${cliente.dni}</td>
      <td>${cliente.email}</td>
      <td>${cliente.direccion}</td>
      <td>${cliente.ciudad}</td>
      <td>${cliente.provincia}</td>
      <td><button type="button" onClick="eliminarCliente(${index})" class="btn btn-outline-danger">Eliminar</button>
      </td>
      </tr>`;
  })
}

export const listarSolicitudes = () => {

  ulSolicitudes.innerHTML = "";

  NuevasSolicitudes.forEach(function (cliente, index) {

    ulSolicitudes.innerHTML += CardCliente(cliente, index);

    setTimeout(() => {
      document.querySelector("#btnAprobar" + index).addEventListener('click', () => {
        let index = event.target.dataset.index;
  
        console.log('sdf')
        const cliente = NuevasSolicitudes[index];
        NuevosClientes.push(cliente);
        NuevasSolicitudes.splice(index, 1);
        listarSolicitudes();
        listarClientes();
  
      })
    }, 10)
    
    setTimeout(() => {
      document.querySelector("#desaprobarCliente" + index).addEventListener('click', () => {
        console.log("entra", index);

        function desaprobarCliente(index){
          console.log("hola");
          NuevasSolicitudes.splice(index, 1);
          listarSolicitudes();    
          listarClientes();
        }
        desaprobarCliente();
      })
    }, 1)
  })

};





listarSolicitudes();
