// -----------------------Header.js-----------------------
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
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

