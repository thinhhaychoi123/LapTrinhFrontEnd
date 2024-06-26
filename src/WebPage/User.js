import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Dang nhap thanh cong") {
              console.log(data.message);
              localStorage.setItem('username', data.username); 
              navigate('/'); 
            } else {
              setError("Dang nhap khong thanh cong");
            }
          })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
            setError('Có lỗi xảy ra, vui lòng thử lại sau.');
        });
    }
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username">User Name</label>
                        <input type="username" placeholder='Enter username' className='form-control'
                            value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password' className='form-control'
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;