function prestamoAdmin() {

  let monto = document.getElementById('monto').value;
  let cuota = document.getElementById('cuotas').value;
  let resultado = document.getElementById('resultado1').innerText;
  Prestamos.push({
    Nombre: nombre,
    Monto: monto,
    Cuota: cuota,
    cuotaMensual: resultado
  })


}
let tBody = document.getElementById('tbody');
let NuevosPedidos = JSON.parse(localStorage.getItem("DatosPrestamos")) || [];


export const listarTrPrestamo = () => {

  tBody.innerHTML = '';
  NuevosPedidos.forEach((Prestamo, index) => {

    tBody.innerHTML += `
           <tr>
              <td> ${Prestamo.Nombre} </td> 
              <td> ${Prestamo.Monto} </td> 
              <td> ${Prestamo.Cuota} </td> 
               
              <td><button type="button" id="btnAprobarPrestamo${index}"  data-index="${index}" class="btn btn-outline-warning">
              Aprobar
              </button>
             <button type="button" id="desaprobarPrestamo${index}"  class="btn btn-outline-danger">
             Denegar
             </button></td>
           </tr>
              `;

    setTimeout(() => {
      document.querySelector("#btnAprobarPrestamo").addEventListener('click', () => {
        let index = event.target.dataset.index;
        const prestamo = NuevosPedidos[index];
        let NuevoPrestamo = JSON.parse(localStorage.getItem("nuevoPrestamo")) || [];
        NuevoPrestamo.push(prestamo);
        NuevosPedidos.splice(index, 1);
        localStorage.setItem("nuevoPrestamo", JSON.stringify(NuevosPrestamos));
        localStorage.setItem("DatosPrestamos", JSON.stringify(NuevosPedidos));

        listarTrPrestamo();
        prestamoAdmin();

      })
    }, 10)

    setTimeout(() => {
      document.querySelector("#desaprobarPrestamo" + index).addEventListener('click', () => {
        function desaprobarPrestamo(index) {
          NuevosPedidos.splice(index, 1);
          localStorage.setItem("DatosPrestamos", JSON.stringify(NuevosPedidos));


          listarTrPrestamo();
          prestamoAdmin();
        }
        desaprobarPrestamo();
      })
    }, 1)

  })
}

let listadoPrestamos = document.getElementById('listaPrestamos');


const listarPrestamos = () => {

  let NuevosPrestamos = JSON.parse(localStorage.getItem("nuevoPrestamo")) || [];
  listadoPrestamos.innerHTML = '';

  NuevosPrestamos.forEach(function (cliente, index) {

    listadoPrestamos.innerHTML += `
        <tr>
          <td> ${Prestamo.Nombre} </td> 
          <td> ${Prestamo.Monto} </td> 
          <td> ${Prestamo.Cuota} </td> 
     
          <td><button type="button" id="eliminarPrestamo${index}" class="btn btn-outline-danger">Eliminar</button>
          </td>
        </tr>`;

    setTimeout(() => {

      document.querySelector("#eliminarPrestamo" + index).addEventListener('click', () => {

        NuevosPrestamos.splice(index, 1);
        localStorage.setItem("nuevoPrestamo", JSON.stringify(NuevosPrestamos));
        listarTrPrestamo();
        listarPrestamos();
        ActualizarContadorClientes()
      })
    }, 1);
  })
}

const eliminaPrestamo = () => {

  let NuevosPrestamos = JSON.parse(localStorage.getItem("nuevoPrestamo")) || [];

  listadoPrestamos.innerHTML = "";

  NuevosPrestamos.forEach((cliente, index) => {
    listadoPrestamos += tbody;
  })
}
listarTrPrestamo();
prestamoAdmin();