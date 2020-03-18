import Swal from 'sweetalert2';

JSON.stringify()


let visa = document.querySelector('#visa');
let mastercard = document.querySelector('#mastercard');
let americanExpress = document.querySelector('#americanExpress');
let nombreSolicitud = document.querySelector('#nameCC');

let seleccionTarjeta = () => {

    if (visa.checked == true) {
        Swal.fire(
            `¡Felicidades ${nombreSolicitud.value} has solicitado tu tarjeta Visa con exito!`,
            'Solo queda esperar a que su solicitud sea procesada y aceptada',
            'success'
        )
    }
    else if (mastercard.checked == true) {
        Swal.fire(
            `¡Felicidades ${nombreSolicitud.value} has solicitado tu tarjeta Mastercard con exito!`,
            'Solo queda esperar a que su solicitud sea procesada y aceptada',
            'success'
        )
    }
    else if (americanExpress.checked == true) {
        Swal.fire(
            `¡Felicidades ${nombreSolicitud.value} has solicitado tu tarjeta American Express con exito!`,
            'Solo queda esperar a que su solicitud sea procesada y aceptada',
            'success'
        )
    }
    

}

let btnSolicitud = document.querySelector('#solicitarTarjeta');
btnSolicitud.addEventListener('click', () => {
    seleccionTarjeta();
})