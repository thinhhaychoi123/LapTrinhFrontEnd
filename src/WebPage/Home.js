// -----------------------Home.js-----------------------
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Search from "../component/Search";
import Service from "./Service";

const Home = () => {
    const [tours, setTours] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        // Gọi API từ JSON Server
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tour');
                setTours(response.data); // Đặt dữ liệu vào state
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        };

        fetchTours();
    }, []);

    const handleAddToCart = (tour) => {
        dispatch({ type: 'cart.add', payload: { product: tour } });
    };

    const handleRemoveFromCart = (tour) => {
        dispatch({ type: 'cart.remove', payload: { product: tour } });
    };

    return (
        
        <div>
        <Search />
        <Service />
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {tours.map(tour => (
                    <div className="col" key={tour.id}>
                        <div className="card h-100">
                            <Link to={`/product/${tour.id}`} className="link-offset-2 link-underline link-underline-opacity-0">
                                <img src={tour.image} alt={tour.name} className="card-img-top" />
                                <div className="card-body" style={{height:'296px'}}>
                                    <h5 className="card-title">{tour.name}</h5>
                                    <p className="card-text"><i className="bi bi-calendar"></i> {tour.date}</p>
                                    <p className="card-text"><i className="bi bi-clock"></i> {tour.start_day}</p>
                                    <p className="card-text text-success">{tour.evaluate}</p>
                                    <p className="card-text text-warning fs-3 position-relative bottom-0 end-0">{tour.price_Adult.toLocaleString()} VNĐ</p>
                                </div>
                            </Link>
                            <div className="card-footer">
                                {cart.find(item => item.id === tour.id) ? (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveFromCart(tour)}
                                    >
                                        Xóa sản phẩm
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => handleAddToCart(tour)}
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </div>
        
    );
};

export default Home;