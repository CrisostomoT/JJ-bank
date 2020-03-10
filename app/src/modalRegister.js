function componentRegister() {
    const element = document.createElement('div');
    element.innerHTML = `
  <!-- Modal -->
  <div class="modal fade" id="modalRegistracion"" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">  
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col">
                <label for="nombre">Nombre</label>
                <input id="nombre" type="text" class="form-control" placeholder="Nombre" required>
              </div>
              <div class="col">
                <label for="apellido">Apellido</label>
                <input id="apellido" type="text" class="form-control" placeholder="Apellido" required>
              </div>
            </div>
          </form>
          <div class="form-group col-md-4">
                <label for="inputState">Seleccionar Genero</label>
                <select id="genero" class="form-control">
                  <option selected> </option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otros</option>
                </select>
              </div>
         
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="documento">Nro. de Documento</label>
              <input type="number" class="form-control" id="documento" required>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Telefono</label>
              <input type="number" class="form-control" id="telefono" required>
            </div>
          </div>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" required
                autofocus>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Contraseña</label>
                <input type="password" class="form-control" id="inputPassword4" required>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Direccion</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Direccion" required>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Ciudad</label>
                <input type="text" class="form-control" id="inputCity" required>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Provincia</label>
                <select id="provincia" class="form-control">
                  <option selected> </option>
                  <option>Buenos Aires</option>
                  <option>Cordoba</option>
                  <option>Tucuman</option>
                  <option>Santa Fe</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">C.P</label>
                <input type="text" class="form-control" id="inputZip" required>
              </div>
            </div>
            <button type="button" onclick="hacerRegister()" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>`
    return element
  }
  document.body.appendChild(componentRegister());

export default modalRegister
