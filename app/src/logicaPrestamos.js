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
let Prestamos =  JSON.parse(localStorage.getItem("DatosPrestamos")) || [];

function prestamoAdmin() {
    let nombre = document.getElementById('name').value;
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
    console.log(Prestamos)
}

let boton =  document.getElementById('cuotaMensual');
boton.addEventListener("click",()=>{  
    cuotaMensual();
});


document.getElementById('btn-prestamo').addEventListener('click',function () {
    console.log(document.getElementById('tbodycito'))
    prestamoAdmin();
} );

