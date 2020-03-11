function impCarousel() {
    const carousel = document.getElementById("carousel")

    carousel.innerHTML = `
    
        <div class="container-fluid">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" id="Carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active col-12 text-center img-fluid">
                            <img src="https://www.cardrates.com/wp-content/uploads/2019/09/Best-Credit-Cards-for-Shopping-Feat.jpg"
                                alt="Third slide" class="img-2">

                            <div class="header-text hidden-xs d-none d-lg-block">
                                <div class="">
                                    <h2>
                                        <span>Bienvenidos a JJ-Bank</span>
                                    </h2>
                                    <br>
                                    <h3>
                                        <span>El Futuro, Ahora</span>
                                    </h3>
                                    <br>
                                    <div class="">
                                        <a class="btn btn-theme btn-sm btn-min-block" href="#"></a>
                                        <a class="btn btn-theme btn-sm btn-min-block btn" href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item  col-12 img-fluid">
                            <img src="https://images.financebuzz.com/1455x768/filters:quality(70)/images/2019/07/15/man-having-best-credit-cards-for-shopping-on-amazon.jpg"
                                alt="Third slide" class="img-2">
                            <div class="header-text hidden-xs d-none d-lg-block">
                                <div class=" text-center">
                                    <h2>
                                        <span>Solución Digital</span>
                                    </h2>
                                    <br>
                                    <h3>
                                        <span>Ahorrá en tiempo y recursos. Ganá eficiencia</span>
                                    </h3>
                                    <br>
                                    <div class="">
                                        <a class="btn btn-theme btn-sm btn-min-block " href="#"></a>
                                        <a class="btn btn-theme btn-sm btn-min-block" href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item col-12 img-fluid">
                            <img src="https://www.badcredit.org/wp-content/uploads/2019/04/storecover.jpg" alt="Third slide"
                                class="img-2">
                            <div class="header-text hidden-xs d-none d-lg-block">
                                <div class=" text-center">
                                    <h2>
                                        <span>Conéctate con el futuro</span>
                                    </h2>
                                    <br>
                                    <h3>
                                        <span>Intégrate con el banco mas innovador</span>
                                    </h3>
                                    <br>
                                    <div class="">
                                        <a class="btn btn-theme btn-sm btn-min-block" href="#"></a>
                                        <a class="btn btn-theme btn-sm btn-min-block" href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        `
    }

    impCarousel();