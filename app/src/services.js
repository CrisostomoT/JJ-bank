function impServices() {

    const services = document.getElementById("services")

    services.innerHTML = `
    
    <div class="">

    <div class="row">

    <div class="card" style="width: 18rem;">
  <div class="card-body shadow p-3 mb-5 bg-white rounded">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        
         

        <!--cards3-->
        <div class="col-2">
            <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src="https://casaluces.files.wordpress.com/2016/08/ahora_12_casaluces1.png?w=662"
                    class="card-img-top" width="200px" height="200px">
                <div class="card-body">
                    <h5 class="card-title">Ahora 12 y Ahora 18</h5>
                    <p class="card-text"></p>
                </div>
                
            </div>
        </div>
    </div>
</div>
    `
}

impServices();