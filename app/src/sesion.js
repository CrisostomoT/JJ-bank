function component() {
  const element = document.createElement('div');

  element.innerHTML = `
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Inicio de Sesion</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card card-signin my-1">
            <div class="card-body">
              <form id="sesion" name="login" class="form-signin">
                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Ingrese correo" required
                    autofocus>
                  <label for="inputEmail"></label>
                </div>
                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Ingrese Contraseña"
                    required>
                  <label for="inputPassword"></label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                </div>
                <input type="submit" value="Ingresar" class="btn btn-primary btn-block">
                <hr class="my-4">
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
    <!-- termina modal -->
`
 return element;
}
exports.sesion;
document.body.appendChild(component());