import CardCliente from './CardClientes'
import usuariosRegistrados from '../'

const NuevasSolicitudes = usuariosRegistrados || []
const ulSolicitudes = document.getElementById("clientes");

export const aprobarCliente = (index) => {
  
}

export const listarSolicitudes = (index) => {

  ulSolicitudes.innerHTML = ""; 

  NuevasSolicitudes.forEach(function (cliente, index) {

    ulSolicitudes.innerHTML +=  CardCliente(cliente, index)
  })

};
listarSolicitudes();

  const NuevosClientes = ulSolicitudes
const listadoClientes = document.getElementById('listaClientes')

const listarClientes = () => {
  listadoClientes.innerHTML = '';
  NuevosClientes.forEach(function(item , index){
      console.log(item)
      listadoClientes.innerHTML += `<li>${item}<button onclick="elminarCliente(${index})">Eliminar Cliente</button></li>`;
  })
}

const eliminarCliente = () => {
  listadoClientes.splice(i,1)
}



