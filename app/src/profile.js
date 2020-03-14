import 'bootstrap';
import '../../node_modules/startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js';

import Swal from 'sweetalert2';

import './index.scss';
import './styleUsser.scss';

import './logicaPrestamos';
import './prestamosAdmin'

let datos = JSON.parse(localStorage.getItem("datoUsuarioActual"));
if (datos.Password.substr(0,3) === "*#%") {
    document.getElementById("admin").style.visibility = "visible";doc
} else {
    document.getElementById("admin").style.visibility = "hidden";
}
console.log(datos);
document.getElementById("usuarionav").innerHTML=`${datos.Nombre}`