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
    
    tBody.innerHTML = '';
    Prestamos.forEach((Prestamo,index) =>{
        
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

    })
    setTimeout(() => {
        document.querySelector("#btnAprobarPrestamo" ).addEventListener('click', () => {
          let index = event.target.dataset.index;
          const prestamo = Prestamos[index];
          let NuevosPrestamos = JSON.parse(localStorage.getItem("nuevosPrestamos")) || [];
          NuevosPrestamos.push(prestamo);
          Prestamos.splice(index, 1);
          localStorage.setItem("nuevosPrestamos", JSON.stringify(NuevosPrestamos));
          localStorage.setItem("DatosPrestamos", JSON.stringify(Prestamos));
  
          listarTrPrestamo();
          prestamoAdmin();
          ActualizarContadorClientes()
          
  
        })
      }, 10)
  
      setTimeout(() => {
        document.querySelector("#desaprobarPrestamo" ).addEventListener('click', () => {
          function desaprobarPrestamo(index) {
            Prestamos.splice(index, 1);
            localStorage.setItem("DatosPrestamos", JSON.stringify(Prestamos));
  
            
            listarTrPrestamo();
            prestamoAdmin();
          }
          desaprobarPrestamo();
        })
      }, 1)
}
listarTrPrestamo();
prestamoAdmin();


