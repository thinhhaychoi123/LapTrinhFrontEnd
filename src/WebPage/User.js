import usersData from 'file:///D:/Thay%20Long/LapTrinhFrontEnd/src/db.json';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('username');
        if (loggedInUser) {
            setLoggedInUsername(loggedInUser);
        }
    }, []); // Empty dependency array to run effect only once on mount

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate fetching user data from local array `users`
            const user = usersData.users.find(user => (user.username === username || user.name === username));
            if (!user) {
                toast.error('Please enter a valid username');
            } else {
                if (user.password === password) {
                    toast.success('Login successful.');
                    sessionStorage.setItem('username', user.username || user.name);
                    setLoggedInUsername(user.username || user.name); // Update state with logged in username
                    navigate('/'); // Redirect to home page after successful login
                } else {
                    toast.error('Invalid credentials');
                }
            }
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem('username'); // Remove login information from sessionStorage
        setLoggedInUsername(''); // Clear loggedInUsername state
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
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                {loggedInUsername ? (
                    <div>
                        <p>Welcome, {loggedInUsername}!</p>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        <Link className="btn btn-success ms-2" to={'/'}>Home</Link>
                    </div>
                ) : (
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Login</button> ||
                                <Link className="btn btn-success" to={'/register'}>New User</Link> ||
                                <Link className="btn btn-success" to={'/'}>Home</Link> ||
                                <Link className="" to={'/reset'}>Forget your password</Link>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login;
