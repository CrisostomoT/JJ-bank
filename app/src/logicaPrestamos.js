 export default function cuotaMensual (){
   
    let name = document.getElementById('name');
    let dropMonto = document.getElementById("monto");
    let monto = (dropMonto.options[dropMonto.selectedIndex].value).slice(1,6);

    let  dropCuotas = document.getElementById("cuotas");
    let cuotas = parseInt(dropCuotas.options[dropCuotas.selectedIndex].value);
    let resultados =  (monto/cuotas).toFixed(2);

    console.log("El monto es",monto);
    console.log("El monto es",cuotas);
    console.log("El monto es",resultados);
    let resultado1 = document.getElementById("resultado1");
    resultado1.innerHTML = ` $ ${resultados}`

}

let boton =  document.getElementById('cuotaMensual');
boton.addEventListener("click",()=>{  
    cuotaMensual();
});



