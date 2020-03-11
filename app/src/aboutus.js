function impAboutUs() {

  const aboutUs = document.getElementById("aboutus")

  aboutUs.innerHTML = `
    
    <div class="container">
    <div class="row">
      
     <h3 class="mt-5 text-left"> Sobre Nosotros</h3>
     <div class="col-md-8">
    
    <img class="img-fluid"   src="quienes.png" alt=""></div>
    
      <div class="container">
        <div class="row">
        
          <div class="col-md-4">
            <h2>Misión</h2>
            <p> Contribuir al desarrollo de las personas y empresas, asesorando y satisfaciendo sus expectativas financieras mediante experiencias positivas.</p>
          </div>

          <div class="col-md-4">
            <h2> Visión </h2>
            <p> Ser la principal alternativa en servicios financieros por su simplicidad, agilidad e inovacion.</p>
            </div>
            
            <div class="col-md-4">
          <h2>Nuestro Propósito</h2>
          <p> Inspirar y retribuir confianza.</p>
          </div>
        </div>
      </div>
    
    `
}

impAboutUs();