import 'bootstrap';
import {generateChart} from './dineroPrestado';

import Swal from 'sweetalert2';

import './index.scss';
import './styleAdmin.scss';


// Area Chart Example
var ctx = document.getElementById("myAreaChart");
generateChart(ctx);

