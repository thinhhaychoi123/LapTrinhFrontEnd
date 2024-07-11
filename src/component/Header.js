// -----------------------Header.js-----------------------
<<<<<<< HEAD
import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import logo from "../Image/logo.png";
import "../css/style.css";


const Header = ({ isDarkMode, toggleDarkMode }) => {
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
    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-0">
                <div className="container-fluid bg-primary">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo"  className="logo"/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light fs-4" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-4" href="/list">Tour trong nước</a>
                            </li>
                        </ul>
                        {
                         <span className="navbar-text me-3" style={{ cursor: 'pointer' }} onClick={navigateToLoginPage}>
                        <i className="bi bi-person fs-1"></i>
                        </span>
            }
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <span className="nav-link text-light fs-4">
                                    <i className="bi bi-cart2 text-light"></i> {cart.length}
                                </span>
                            </li>
                            <li className="nav-item">
                                <label className="switch">
                                    <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                                    <span className="slider round"></span>
                                </label>
                            </li>
                        </ul>
=======
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import tour from "../Image/tour.png";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    const cart = useSelector(state => state.cart);

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={tour} alt="logo" />
                    </a>
                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/list">Tour trong nước</a>
                            <span className="navbar-text">
                                <i className="bi bi-cart2"></i> {cart.length}
                            </span>
                            <button onClick={toggleDarkMode} className="btn btn-dark-mode-toggle">
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
<<<<<<< HEAD
=======

>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
