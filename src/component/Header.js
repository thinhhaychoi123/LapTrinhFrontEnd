import React from "react";
import tour from "../Image/tour.png"

const Header = () => {
    return (
        <>
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
                            <a className="nav-link" href="/">Pricing</a>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
