const CardCliente = (nombre, Apellido, Dni, Email,  Direccion, Ciudad, Provincia) => `
                <tr>
                <td>${nombre}</td>
                <td>${Apellido}</td>
                <td>${Dni}</td>
                <td>${Email}</td>
                <td>${Direccion}</td>
                <td>${Ciudad}</td>
                <td>${Provincia}</td>
                <td><button type="button" onClick="listarClientes()" class="btn btn-outline-warning">Aprobado</button>
                <button type="button" class="btn btn-outline-danger">Denegado</button></td>
                </tr>`;

                




export default CardCliente