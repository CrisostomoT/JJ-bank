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
             <button type="button" id="desaprobarPrestamo${index}"  class="btn btn-outline-danger">
             Denegar
             </button></td>
           </tr>
              `;

    })
}
   listarTrPrestamo();
   

   
   const ulPrestamosAprob = document.getElementById('ulPrestamosAprob');
   const prestamoAprobado = JSON.parse(localStorage.getItem("DatosPrestamos")) || [];

   const aprobarPrestamos = () => {
       ulPrestamosAprob.innerHTML = "";
       prestamoAprobado.forEach(function (Prestamo,index) {
           ulPrestamosAprob.innerHTML += `
           <td> ${Prestamo.Nombre} </td> 
           <td> ${Prestamo.Monto} </td> 
           <td> ${Prestamo.Cuota} </td> 
           <td> ${Prestamo.cuotaMensual} </td> 
           `
           setTimeout(() => {
              document.querySelector('#btnAprobar' + index).addEventListener('click', () => {  
                 let index = event.target.dataset.index;
                 const dinero = prestamoAprobado[index]
                 let NuevoPrestamo = JSON.parse(localStorage.getItem("Prestamos-Aprobados")) || [];
                 NuevoPrestamo.push(dinero);
                 prestamoAprobado.splice(index,1);
                 localStorage.setItem("PrestAprobado",JSON.stringify(NuevoPrestamo));
                 aprobarPrestamos();
                 listarTrPrestamo()
              })
           }, 10);
            
           setTimeout(() => {
               document.querySelector('#desaprobarPrestamo' + index).addEventListener('click', () => {
                   function desaprobarPrestamo(index){
                       NuevoPrestamo.splice(index,1);
                       aprobarPrestamos();
                       
                   }
                   desaprobarPrestamo();
               })
           }, 10000 )
       })
   };



