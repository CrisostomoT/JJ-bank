function impFooter(){

    const footer = document.getElementById("footer")

    footer.innerHTML = `

            <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4 ">
                    <h5 class="mb-4 text-center">Contáctenos </h5>

                    <ul class="f-address">
                        <li>
                            <div class="row">
                                <div class="col-1"><i class="fas fa-map-marker"></i></div>
                                <div class="col-10">
                                    <h6 class="font-weight-bold mb-0">Dirección:</h6>
                                    <p>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="col-1"><i class="far fa-envelope"></i></div>
                                <div class="col-10">
                                    <h6 class="font-weight-bold mb-0">Preguntas</h6>
                                    <p><a href="#">nosotros@jjbank.com</a></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="col-1"><i class="fas fa-phone-volume"></i></div>
                                <div class="col-10">
                                    <h6 class="font-weight-bold mb-0">Telefono</h6>
                                    <p><a href="#">0381-555555 000</a></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                    <h5 class="mb-4 text-center"> Información</h5>
                    <ul class="f-address">
                        <li>
                            <div class="row">
                                <div class="col-1"><i class="fas fa-angle-right"></i> </div>
                                <div class="col-10">
                                    <p class="mb-0"><a href="#">Promos y Beneficios </a></p>
                                    <label>Más ahorros para vos  </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="col-1"><i class="fas fa-angle-right"></i> </div>
                                <div class="col-10">
                                    <p class="mb-0"><a href="#"> Créditos y préstamos</a></p>
                                    <label> Préstamos a tu medida  </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="col-1"> <i class="fas fa-angle-right"></i> </div>
                                <div class="col-10">
                                    <p class="mb-0"><a href="#"> Tarjetas</a></p>
                                    <label>Las más elegidas</label>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="row">
                                <div class="col-1"> <i class="fas fa-angle-right"></i> </div>
                                <div class="col-10">
                                    <p class="mb-0"><a href="#">Sobre Nosotros </a></p>
                                    <label>Un equipo en movimiento </label>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                    <h5 class="mb-4 font-weight-bold"></h5>


                    <img src="/app/src/assets/img/logo2.png" class="animated bounce infinite " alt="logo">

                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">


                    <ul class="social-pet mt-5">
                        <li><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" title="twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" title="instagram"><i class="fab fa-instagram"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    `}

impFooter();
