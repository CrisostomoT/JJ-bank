let Prestamos =  JSON.parse(localStorage.getItem("DatosPrestamos")) || [];
let tBody = document.querySelector('#tbodycito');



const listarTrPrestamo = () => {
    console.log(Prestamos)
    tBody.innerHTML = '';
    Prestamos.forEach((Prestamo,index) =>{
        console.log(Prestamo,index);
        tBody.innerHTML += `
           <tr>
              <td> ${Prestamo.Nombre} </td> 
              <td> ${Prestamo.Monto} </td> 
              <td> ${Prestamo.Cuota} </td> 
              <td> ${Prestamo.cuotaMensual} </td> 
              <td><button type="button" id="btnAprobar${index}"  data-index="${index}" class="btn btn-outline-warning">
              Aprobar
              </button>
             <button type="button" id="desaprobarCliente${index}"  class="btn btn-outline-danger">
             Denegar
             </button></td>
           </tr>
              `;

    })
}

   listarTrPrestamo();





