// HistoryView.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HistoryView = () => {
    const [viewHistory, setViewHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("viewHistory")) || [];
        setViewHistory(history);
    }, []);

    const handleRemoveFromHistory = (id) => {
        const updatedHistory = viewHistory.filter(product => product.id !== id);
        setViewHistory(updatedHistory);
        localStorage.setItem("viewHistory", JSON.stringify(updatedHistory));
    };

    return (
        <div className="container my-4">
            <h2 className="mb-4">Lịch sử xem sản phẩm</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {viewHistory.map(product => (
                    <div key={product.id} className="col">
                        <div className="card h-100 hsshadow">
                            <button
                                className="btn fs-5 btn-sm position-absolute m-2 btndestroy"  style={{top:'-15px', right:'-10px'}}
                                onClick={() => handleRemoveFromHistory(product.id)}
                            >
                                &times;
                            </button>
                            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark shadowBlue">
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex">
                                        <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-0">
                                            <h5 className="card-title fs-6 m-2">{product.name}</h5>
                                            <p className="card-text fs-6 m-2">{product.date}</p>
                                            <p className="card-text text-primary fs-6 d-flex flex-row-reverse">{product.price_Adult.toLocaleString()} VNĐ</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryView;
