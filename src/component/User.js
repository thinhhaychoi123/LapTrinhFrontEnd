import usersData from 'file:///D:/git-tour/LapTrinhFrontEnd/src/data/data.json';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import bklogin from '../Image/backgroundlogin.png';
import "../css/style.css";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        try {
            const loggedInUser = sessionStorage.getItem('username');
            if (loggedInUser) {
                setLoggedInUsername(loggedInUser);
            }
        } catch (error) {
            console.error('Failed to retrieve username from sessionStorage:', error);
        }
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            const user = usersData.users.find(user => (user.username === username || user.name === username));
            if (!user) {
                setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
                toast.error('Please enter a valid username');
            } else {
                if (user.password === password) {
                    toast.success('Login successful.');
                    try {
                        sessionStorage.setItem('username', user.username || user.name);
                    } catch (error) {
                        console.error('Failed to save username to sessionStorage:', error);
                    }
                    setLoggedInUsername(user.username || user.name);
                    setErrorMessage('');
                    navigate('/');
                } else {
                    setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
                    toast.error('Invalid credentials');
                }
            }
        }
    }

    const handleLogout = () => {
        try {
            sessionStorage.removeItem('username');
        } catch (error) {
            console.error('Failed to remove username from sessionStorage:', error);
        }
        setLoggedInUsername('');
    };

    const validate = () => {
        let result = true;
        if (!username) {
            result = false;
            toast.warning('Please enter username');
        }
        if (!password) {
            result = false;
            toast.warning('Please enter password');
        }
        return result;
    }

    return (
        <div className="login-container backgroundLogin" >
            <div className="row">
                <div className="">
                    {loggedInUsername ? (
                        <div className="text-center">
                            <p>Welcome, {loggedInUsername}!</p>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            <Link className="btn btn-success ms-2" to={'/'}>Home</Link>
                        </div>
                    ) : (
                        <form onSubmit={ProceedLogin} className="card">
                            <div className="card-header bg-primary text-white">
                                <h2 className="text-center">Đăng nhập</h2>
                            </div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <div className="form-group">
                                    <label>Tài khoản <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                <Link className="btn btn-success ms-2" to={'/register'}>Đăng ký</Link>
                                <Link className="btn btn-success ms-2" to={'/'}>Trang chủ</Link>
                                <Link className="" to={'/reset'}>Quên mật khẩu</Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    isDarkMode: PropTypes.bool,
    toggleDarkMode: PropTypes.func
};

export default Login;
