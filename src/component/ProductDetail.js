import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import Header from './Header';
import "../css/style.css";
=======
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff

const ProductDetail = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
<<<<<<< HEAD
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

=======
    

>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/tour/${id}`);
                setTour(response.data);
<<<<<<< HEAD

=======
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
                // Lưu lịch sử xem sản phẩm vào local storage
                const history = JSON.parse(localStorage.getItem("viewHistory")) || [];
                const newHistory = history.filter(item => item.id !== response.data.id); // Remove duplicate
                newHistory.unshift(response.data); // Add new view to the beginning
                localStorage.setItem("viewHistory", JSON.stringify(newHistory.slice(0, 10))); // Keep only latest 10
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchTour();
    }, [id]);

    if (!tour) return <div>Loading...</div>;

    return (
<<<<<<< HEAD
        <div>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className='p-3 mb-2 bg-body-secondary'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{tour.name}</h2>
                            <img src={tour.image_introduce} alt={tour.name} className="img-fluid" />
                            <div className="mt-3">
                                <h5 className='fs-3 text-primary'>{tour.description.title}</h5>
                                <p className='border border-4 p-3 bg-light text-dark'>{tour.description.content}</p>
                            </div>

                            <div className="mt-3 border border-4 p-3 bg-light text-dark">
                                <h5>Chương trình tour</h5>
                                {tour.detail.map(day => (
                                    <div key={day.id} className="mt-4">
                                        <h6>{day.name}</h6>
                                        {day.route.map((routeItem, index) => (
                                            <div key={index} className="ml-3">
                                                {routeItem.time && <p><strong>{routeItem.time}</strong></p>}
                                                <p>{routeItem.description}</p>
                                                {routeItem.image && <img src={routeItem.image} alt='' style={{ width: '100%', maxWidth: '710px' }} />}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fixed-sidebar">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Lịch Trình và Giá Tour</h5>
                                        <p>Chọn Lịch Trình và Xem Giá:</p>
                                        {/* Lịch trình */}
                                        <div className="form-group">
                                            <label>Người lớn:</label>
                                            <input type="number" className="form-control" value={4} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label>Trẻ em:</label>
                                            <input type="number" className="form-control" value={0} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label>Trẻ nhỏ:</label>
                                            <input type="number" className="form-control" value={0} readOnly />
                                        </div>
                                        <h5 className="mt-3">Tổng Giá Tour: {tour.price_Adult.toLocaleString()} VND</h5>
                                        <button className="btn btn-warning mt-3">Liên hệ tư vấn</button>
                                        <button className="btn btn-primary mt-2">Đặt Tour ngay</button>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <ul style={{listStyle: 'none'}}>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Bảo hiểm</li>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Hướng dẫn viên</li>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Bữa ăn</li>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Nhà dân homestay</li>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Vé tham quan</li>
                                            <li><i class="bi bi-check2 text-success me-3"></i> Xe đưa đón</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
=======
        <div className='p-3 mb-2 bg-body-secondary'>
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>{tour.name}</h2>
                    <img src={tour.image_introduce} alt={tour.name} className="img-fluid" />
                    <div className="mt-3">
                        <h5 className='fs-3 text-primary'>{tour.description.title}</h5>
                        <p className='border border-4 p-3 mb-2 bg-light text-dark'>{tour.description.content}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lịch Trình và Giá Tour</h5>
                            <p>Chọn Lịch Trình và Xem Giá:</p>
                            {/* Lịch trình */}
                            <div className="form-group">
                                <label>Người lớn:</label>
                                <input type="number" className="form-control" value={4} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Trẻ em:</label>
                                <input type="number" className="form-control" value={0} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Trẻ nhỏ:</label>
                                <input type="number" className="form-control" value={0} readOnly />
                            </div>
                            <h5 className="mt-3">Tổng Giá Tour: {tour.price_Adult.toLocaleString()} VND</h5>
                            <button className="btn btn-warning mt-3">Liên hệ tư vấn</button>
                            <button className="btn btn-primary mt-2">Đặt Tour ngay</button>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <ul>
                                <li>Bảo hiểm</li>
                                <li>Hướng dẫn viên</li>
                                <li>Bữa ăn</li>
                                <li>Nhà dân homestay</li>
                                <li>Vé tham quan</li>
                                <li>Xe đưa đón</li>
                            </ul>
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======

            <div className="mt-3 border border-4 p-3 mb-2 bg-light text-dark ">
                <h5>Chương trình tour</h5>
                {tour.detail.map(day => (
                    <div key={day.id} className="mt-4" >
                        <h6>{day.name}</h6>
                        {day.route.map((routeItem, index) => (
                            <div key={index} className="ml-3">
                                {routeItem.time && <p><strong>{routeItem.time}</strong></p>}
                                <p>{routeItem.description}</p>
                                <img src={routeItem.image} alt=''/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>



            
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
        </div>
        </div>
        


    );
};

export default ProductDetail;
