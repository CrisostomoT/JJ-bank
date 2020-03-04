function impNavbar() {

    const navBar = document.getElementById("navbar")

    navBar.innerHTML = `
    
        <img src="/app/src/assets/img/logo1.png" class="img-logo" alt="JJ-Bank">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="profile.html">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin.html">Admin</a>
                        </li>

                    </ul>
                </div>
        `
}

impNavbar();