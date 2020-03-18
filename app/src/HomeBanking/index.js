import usuariosRegistrados from '../'



const CardCliente = (cliente, index) => `
                <tr>
                <td>${cliente.Nombre}</td>
                <td>${cliente.Apellido}</td>
                <td>${cliente.Email}</td>
                <td>${cliente.Direccion}</td>
                <td>${cliente.Ciudad}</td>
                <td>${cliente.Provincia}</td>
                <td><button type="button" id="btnAprobar${index}"  data-index="${index}" class="btn btn-outline-warning">Aprobar</button>
                <button type="button" id="desaprobarCliente${index}"  class="btn btn-outline-danger">Denegar</button></td>
                </tr>`;


let ulSolicitudes = document.getElementById("solicitudes");
let NuevasSolicitudes = JSON.parse(localStorage.getItem('datosIngresados')) || [];

export const listarSolicitudes = () => {

  ulSolicitudes.innerHTML = "";

  NuevasSolicitudes.forEach(function (cliente, index) {

    ulSolicitudes.innerHTML += CardCliente(cliente, index);

    setTimeout(() => {
      document.querySelector("#btnAprobar" + index).addEventListener('click', () => {
        let index = event.target.dataset.index;
        const cliente = NuevasSolicitudes[index];
        let NuevosClientes = JSON.parse(localStorage.getItem("nuevosClientes")) || [];
        NuevosClientes.push(cliente);
        NuevasSolicitudes.splice(index, 1);
        localStorage.setItem("nuevosClientes", JSON.stringify(NuevosClientes));
        localStorage.setItem("datosIngresados", JSON.stringify(NuevasSolicitudes));

        listarSolicitudes();
        listarClientes();
        ActualizarContadorClientes()


      })
    }, 10)

    setTimeout(() => {
      document.querySelector("#desaprobarCliente" + index).addEventListener('click', () => {
        function desaprobarCliente(index) {
          NuevasSolicitudes.splice(index, 1);
          localStorage.setItem("datosIngresados", JSON.stringify(NuevasSolicitudes));


          listarSolicitudes();
          listarClientes();
        }
        desaprobarCliente();
      })
    }, 1)
  })
};

let listadoClientes = document.getElementById('listaClientes');


const listarClientes = () => {

  let NuevosClientes = JSON.parse(localStorage.getItem("nuevosClientes")) || [];
  listadoClientes.innerHTML = '';

  NuevosClientes.forEach(function (cliente, index) {

    listadoClientes.innerHTML += `
      <tr>
      <td>${cliente.Nombre}</td>
      <td>${cliente.Apellido}</td>
      <td>${cliente.Email}</td>
      <td>${cliente.Direccion}</td>
      <td>${cliente.Ciudad}</td>
      <td>${cliente.Provincia}</td>
      <td><button type="button" id="eliminarCliente${index}" class="btn btn-outline-danger">Eliminar</button>
      </td>
      </tr>`;

    setTimeout(() => {

      document.querySelector("#eliminarCliente" + index).addEventListener('click', () => {

        NuevosClientes.splice(index, 1);
        localStorage.setItem("nuevosClientes", JSON.stringify(NuevosClientes));
        listarSolicitudes();
        listarClientes();
        ActualizarContadorClientes()
      })
    }, 1);
  })
}

const eliminaCliente = () => {

  let NuevosClientes = JSON.parse(localStorage.getItem("nuevosClientes")) || [];

  listadoClientes.innerHTML = "";

  NuevosClientes.forEach((cliente, index) => {
    listadoClientes += CardCliente(cliente, index);
  })
}

function ActualizarContadorClientes() {
  let NuevosClientes = JSON.parse(localStorage.getItem("nuevosClientes")) || [];
  let contador = document.getElementById("contadorClientes");
  contador.innerHTML = NuevosClientes.length


}
listarSolicitudes();
listarClientes();
ActualizarContadorClientes();