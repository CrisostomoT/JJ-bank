function impNavbar() {

    const navBar = document.getElementById("navbar")

    navBar.innerHTML = `
    
    <div href="index.html">
    <img src="./app/src/assets/img/logo2.png" width="30" height="30" alt="">
    <a class="navbar-brand test">Bank</a>
  </div>

   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
     aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
     <ul class="navbar-nav mx-auto mt-2 mt-lg-0 ulNav">
       <li class="nav-item ml-5">
         <a class="nav-link test" href="#">Sobre Nosotros</a>
       </li>
       <li class="nav-item dropdown ml-5">
         <a class="nav-link dropdown-toggle test" href="#" id="navbarDropdown" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Nuestros Productos
         </a>
         <div class="dropdown-menu" v aria-labelledby="navbarDropdown">
           <a class="dropdown-item" href="#">Tarjetas de Credito</a>
           <a class="dropdown-item" href="#">Caja de Ahorros</a>
           <a class="dropdown-item" href="#">Cuenta Corriente</a>
     </ul>
     <div class="nav-item ml-5">
       <a class="nav-link test" data-toggle="modal" data-target="#modalRegistracion" href="#">Registrarse</a>
     </div>
     <div class="nav-item ml-5">
       <a class="nav-link test" data-toggle="modal" data-target="#exampleModal" href="#">Ingresar</a>
     </div>
        `
}

impNavbar();
