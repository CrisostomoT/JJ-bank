 export default function cuotaMensual (){
   
   
    let dropMonto = document.getElementById("monto");
    let monto = parseInt(dropMonto.options[dropMonto.selectedIndex].value);

    let  dropCuotas = document.getElementById("cuotas");
    let cuotas = parseInt(dropCuotas.options[dropCuotas.selectedIndex].value);
    let resultados =  (monto/cuotas).toFixed(2);

    
    let resultado1 = document.getElementById("resultado1");
    resultado1.innerHTML = ` $ ${resultados}`

}

let boton =  document.getElementById('cuotaMensual');
boton.addEventListener("click",()=>{  
    cuotaMensual();
});
function solicitarPrestamo(){
    const usuarioActual = JSON.parse(localStorage.getItem("datoUsuarioActual"));
    let dropMonto = document.getElementById("monto");
    let monto = parseInt(dropMonto.options[dropMonto.selectedIndex].value);

    let  dropCuotas = document.getElementById("cuotas");
    let cuotas = parseInt(dropCuotas.options[dropCuotas.selectedIndex].value);
    let prestamo = {
        Nombre: usuarioActual.Nombre + usuarioActual.Apellido, 
        Monto: monto,
        Cuota: cuotas, 
    }
    let prestamos = JSON.parse(localStorage.getItem("DatosPrestamos")) || [];
    prestamos.push(prestamo);
    
    localStorage.setItem("DatosPrestamos", JSON.stringify(prestamos));

}

document.getElementById('btn-prestamo').addEventListener('click',solicitarPrestamo);



