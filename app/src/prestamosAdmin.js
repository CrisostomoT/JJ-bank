let Prestamos =  JSON.parse(localStorage.getItem("DatosPrestamos")) || [];

 export function prestamoAdmin() {
    let monto = document.getElementById('monto');
    let cuota = document.getElementById('cuota');
    let resultado = document.getElementById('resultado1');
    Prestamos.push({
        Monto : monto,
        Cuota : cuota,
        cuotaMensual : resultado
    })
    localStorage.setItem("DatosPrestamos", JSON.stringify(Prestamos));
    console.log(prestamosAdmin)
}

// document.getElementById('btn-prestamo').addEventListener('click',prestamosAdmin());
