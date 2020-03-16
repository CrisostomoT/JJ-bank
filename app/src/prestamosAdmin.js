let Prestamos =  JSON.parse(localStorage.getItem("DatosPrestamos")) || [];
let tBody = document.getElementById('tbody');

function prestamoAdmin() {
    
    let monto = document.getElementById('monto').value;
    let cuota = document.getElementById('cuotas').value;
    let resultado = document.getElementById('resultado1').innerText;
    Prestamos.push({
        Nombre : nombre,
        Monto : monto,
        Cuota : cuota,
        cuotaMensual : resultado
    })
    localStorage.setItem("DatosPrestamos", JSON.stringify(Prestamos));
   
   
}

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



