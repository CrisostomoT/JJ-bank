const CardCliente = (cliente,index) => `
                <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.Apellido}</td>
                <td>${cliente.Dni}</td>
                <td>${cliente.Email}</td>
                <td>${cliente.Direccion}</td>
                <td>${cliente.Ciudad}</td>
                <td>${cliente.Provincia}</td>
                <td><button type="button" onClick="aprobarCliente(${index})" class="btn btn-outline-warning">Aprobado</button>
                <button type="button" class="btn btn-outline-danger">Denegado</button></td>
                </tr>`;

                




export default CardCliente