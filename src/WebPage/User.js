import usersData from '../data/data.json'
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../component/Header";
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
            console.log('Validation passed. Attempting login...');
            const user = usersData.users.find(user => (user.username === username || user.name === username));
            if (!user) {
                console.log('User not found:', username);
                setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
                toast.error('Please enter a valid username');
            } else {
                if (user.password === password) {
                    console.log('Login successful for:', user.username || user.name);
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
                    console.log('Incorrect password for:', user.username || user.name);
                    setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
                    toast.error('Invalid credentials');
                }
            }
        }
    };

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
        let message = '';
        if (!username) {
            result = false;
            message += 'Vui lòng điền tài khoản ';
            toast.warning('Vui lòng điền tài khoản ');
        }
        if (!password) {
            result = false;
            message += 'Vui lòng điền mật khẩu';
            toast.warning('Vui lòng điền mật khẩu');
        }
        setErrorMessage(message.trim());
        return result;
    }
    

    return (
        <div>
            <Header />
            <div className="bklogin">
                <div className="d-flex align-items-center">
                    <div className="col-lg-6 offset-lg-3 mt-5">
                        {loggedInUsername ? (
                            <div className="text-center">
                                <p>Welcome, {loggedInUsername}!</p>
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                <Link className="btn btn-success ms-2" to={'/'}>Home</Link>
                            </div>
                        ) : (
                            <form onSubmit={ProceedLogin} className="card">
                                <div className="card-header bg-primary text-white">
                                    <h2 className="text-center">User Login</h2>
                                </div>
                                <div className="card-body">
                                    {errorMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="card-footer d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                    <div className='d-flex justify-content-between'>
                                        <Link className="" to={'/register'}>Tạo tài khoản</Link>
                                        <Link className="" to={'/reset'}>Quên mật khẩu</Link>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
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
