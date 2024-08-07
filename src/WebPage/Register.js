import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import Header from "../component/Header";
import "../css/style.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("male");

    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = 'Please enter the value in ';
        if (!username) {
            isProceed = false;
            errorMessage += 'Username';
        }
        if (!password) {
            isProceed = false;
            errorMessage += 'Password';
        }
        if (!email) {
            isProceed = false;
            errorMessage += 'Email';
        }

        if (!isProceed) {
            toast.warning(errorMessage);
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            isProceed = false;
            toast.warning('Please enter a valid email');
        }

        return isProceed;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        const newUser = { username, password, email, phone, country, gender };
        
        if (isValidate()) {
            // Gửi dữ liệu đăng ký đến API
            fetch("http://localhost:3001/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            .then(response => {
                if (response.ok) {
                    toast.success('Registered successfully.');
                    navigate('/user'); // Điều hướng đến trang /user sau khi đăng ký thành công
                } else {
                    throw new Error('Failed to register');
                }
            })
            .catch(error => {
                toast.error('Failed to register: ' + error.message);
            });
        }
    }

    return (
        <div>
            <Header />
        <div className="bklogin d-flex ">
            <form onSubmit={handleSubmit} className="container mt-5" style={{width:'700px'}}>
                <div className="card">
                    <div className="card-header">
                        <h1>Đăng ký tài khoản</h1>
                    </div>
                    <div className="card-body" >
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Tài khoản: <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Mật Khẩu <span className="errmsg">*</span></label>
                                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email: <span className="errmsg">*</span></label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Số điện thoại: <span className="errmsg"></span></label>
                                    <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Quốc gia: <span className="errmsg">*</span></label>
                                    <select value={country} onChange={e => setCountry(e.target.value)} className="form-control">
                                        <option value="ha noi">Hà Nội</option>
                                        <option value="ho chi minh">Hồ Chí Minh</option>
                                        <option value="da nang">Đà Nẵng</option>
                                        <option value="hai phong">Hải Phòng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Giới tính</label>
                                    <br />
                                    <input type="radio" checked={gender === 'male'} onChange={() => setGender('male')} name="gender" className="app-check" />
                                    <label>Nam</label>
                                    <input type="radio" checked={gender === 'female'} onChange={() => setGender('female')} name="gender" className="app-check" />
                                    <label>Nữ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                        <Link to={'/user'} className="btn btn-danger">Đăng nhập</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Register;
