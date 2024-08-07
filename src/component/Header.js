import React, { useEffect, useState } from "react";
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
    const navigatetocart = () =>{
        navigate('/cart'); // điều hướng đến đường dẫn '/cart'
    }  
    const navigatetohistory = () =>{
        navigate('/history'); // điều hướng đến đường dẫn '/history'
    }  
    const handleLogout = () => {
        sessionStorage.removeItem('id_user');//Xóa user id
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
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light fs-4" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-4" href="/list">Tour du lịch</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex align-items-center">
                            {username ? (
                                <>
                                    <li className="nav-item">
                                        <span className="navbar-text me-3 text-light fs-4">
                                            Xin chào, {username}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <span className="navbar-text me-3" style={{ cursor: 'pointer' }} onClick={navigateToLoginPage}>
                                        <i className="bi bi-person fs-1"></i>
                                    </span>
                                </li>
                            )}
                             <li className="nav-item" style={{ cursor: 'pointer' }} onClick={navigatetocart}>
                                <span className="nav-link text-light fs-4">
                                    <i className="bi bi-cart2 text-light"></i> {cart.length}
                                </span>
                            </li>
                            {username ? (
                                <>
                                    <li className="nav-item" style={{ cursor: 'pointer' }} onClick={navigatetohistory}>
                                        <i className="bi bi-journal-text text-light fs-3"></i>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}
                            <li className="nav-item">
                                <label className="switch">
                                    <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                                    <span className="slider round"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
