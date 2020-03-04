function impServices() {

    const services = document.getElementById("services")

    services.innerHTML = `
    
    <div class="container-fluid">
    <div class="row">
        
         <!--cards1-->
        <div class="col-4">
            <div class="card">
                <img src="https://www.bbva.com/wp-content/uploads/2018/08/Tarjetas-de-Credito-Paraguay-1024x683.jpg"
                    class="card-img-top" width="200px" height="200px">
                <div class="card-body">
                    <h5 class="card-title">Tarjetas de Credito</h5>
                    <p class="card-text">Las tarjetas de crédito de JJBANK no solo son un medio de pago
                        práctico y seguro también te ofrecen: </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">La financiación que necesitás para esas compras que no
                        pueden esperar</li>
                    <li class="list-group-item">Podés controlar mejor tus gastos</li>
                    <li class="list-group-item">Posibilidad de elegir plazos de pago</li>
                    <li class="list-group-item">Disposición de dinero en forma de crédito en el momento que
                        lo necesités estamos esperándote.</li>
                </ul>
            </div>
        </div>

        <!--cards2-->
        <div class="col-4">
            <div class="card ">
                <img src="https://whostingok.com/wp-content/uploads/2019/10/prestamos4.png"
                    class="card-img-top" width="200px" height="200px">
                <div class="card-body">
                    <h5 class="card-title">Préstamos</h5>
                    <p class="card-text">Para el viaje que soñás, remodelar o equipar tu casa, emprender un
                        negocio o lo que te propongas. ¡Concretá tu proyecto con la financiación más
                        conveniente! </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Su solicitud puede ser online y se acredita inmediatamente.
                    </li>
                    <li class="list-group-item">Tenés la posibilidad de cancelarlo anticipadamente cuando
                        quieras</li>
                    <li class="list-group-item">Comenzá a disfrutar de tu préstamo ahora </li>
                </ul>
            </div>
        </div>

        <!--cards3-->
        <div class="col-4">
            <div class="card">
                <img src="https://casaluces.files.wordpress.com/2016/08/ahora_12_casaluces1.png?w=662"
                    class="card-img-top" width="200px" height="200px">
                <div class="card-body">
                    <h5 class="card-title">Ahora 12 y Ahora 18</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Promocion válida desde 01/02/2020 AL 28/05/2020.</li>
                    <li class="list-group-item">El plan del gobierno nacional , incluye smatphones,
                        notebooks, televisores, turismo, tablets, todo lo que necesitas</li>

                </ul>
            </div>
        </div>
    </div>
</div>
    `
}

impServices();