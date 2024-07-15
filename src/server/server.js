import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Thêm thư viện react-toastify để hiển thị thông báo

function Service() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err);
                setError('Failed to fetch users. Please try again later.');
                toast.error('Failed to fetch users. Please try again later.');
            });
    }, []);

    return (
        <div className="container">
            <h1>User List</h1>
            {error && <p className="text-danger">{error}</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        {/* Loại bỏ mật khẩu để bảo mật */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            {/* Không hiển thị mật khẩu */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Service;
