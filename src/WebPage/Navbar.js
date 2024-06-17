import React from 'react';
import logo from '../Image/tour.png';
const Navbar = () => {
return(
    <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"> 
          <img src={logo} alt="logo" width="80px" height="80px" class="d-inline-block align-text-top" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tour trong nước</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tour nước ngoài</a>
            </li>
          </ul>
            <span class="navbar-text">
                <i class="bi bi-bag fs-2"></i>
            </span>
        </div>
      </div>
    </nav>
    </div>
);
};
export default Navbar;