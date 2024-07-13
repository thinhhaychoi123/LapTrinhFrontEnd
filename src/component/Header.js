// -----------------------Header.js-----------------------
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import logo from "../Image/logo.png";
import "../css/style.css";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const navigateToLoginPage = () => {
        navigate('/user'); // điều hướng đến đường dẫn '/user'
    };

    const handleLogout = () => {
        sessionStorage.removeItem('username'); // Xóa thông tin đăng nhập từ sessionStorage
        localStorage.removeItem('username'); // Xóa thông tin đăng nhập từ localStorage (nếu có)
        setUsername(''); // Clear username state
        navigate('/user'); // Điều hướng về trang đăng nhập sau khi đăng xuất
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-0">
                <div className="container-fluid bg-primary">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className="logo" />
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

