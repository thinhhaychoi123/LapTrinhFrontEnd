import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../component/Header";
import Search from "../component/Search";
import Service from "./Service";
import Background from "../WebPage/Background";
import HistoryView from "./HistoryView";
<<<<<<< HEAD
import Footer from "./Footer";
=======
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
import "../css/style.css";

const Home = () => {
    const [tours, setTours] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [toursPerPage] = useState(10);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tour');
                setTours(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        };

        fetchTours();
    }, []);

    // Lấy danh sách sản phẩm hiện tại
    const indexOfLastTour = currentPage * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

    // Tính tổng số trang
    const totalPages = Math.ceil(tours.length / toursPerPage);

    // Hàm chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleAddToCart = (tour) => {
        dispatch({ type: 'cart.add', payload: { product: tour } });
    };

    const handleRemoveFromCart = (tour) => {
        dispatch({ type: 'cart.remove', payload: { product: tour } });
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Background />
            <HistoryView />
            <Service />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {currentTours.map(tour => (
                        <div className="col" key={tour.id}>
                            <div className="card h-100 hsshadow">
                                <Link to={`/product/${tour.id}`} className="link-offset-2 link-underline link-underline-opacity-0">
                                    <img src={tour.image} alt={tour.name} className="card-img-top" />
                                    <div className="card-body" style={{ height: '296px' }}>
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
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-4">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
<<<<<<< HEAD
            <Footer />
=======
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
        </div>
    );
};

export default Home;
