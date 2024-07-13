// ---------------------------Navbar.js---------------------------
import React from 'react';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from '../Image/tour.png';

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate('/user'); // điều hướng đến đường dẫn '/login'
  };
  const handleLogout = () => {
    sessionStorage.removeItem('username'); // Xóa thông tin đăng nhập từ sessionStorage
    localStorage.removeItem('username'); // Xóa thông tin đăng nhập từ localStorage (nếu có)
    navigate('/user'); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };
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
              <Link to="/list-tour" class="nav-link" href="#">Tour trong nước</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tour nước ngoài</a>
            </li>
          </ul>
          {
              <span className="navbar-text me-3" style={{ cursor: 'pointer' }} onClick={navigateToLoginPage}>
                <i className="bi bi-person fs-1"></i>
              </span>
            }
            <span class="navbar-text">
                <i class="bi bi-bag fs-2">{cart.length}</i>
            </span>
        </div>
      </div>
    </nav>
    </div>
);
};
export default Navbar;
// ---------------------