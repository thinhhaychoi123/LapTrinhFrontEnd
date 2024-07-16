import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import HistoryView from "../WebPage/HistoryView";
import Footer from "../component/Footer";


const ProductDetail = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [randomTours, setRandomTours] = useState([]);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/tour/${id}`);
                setTour(response.data);

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

    useEffect(() => {
        const fetchRandomTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tour');
                const tours = response.data;

                // Lọc ra các tour khác tour hiện tại
                const filteredTours = tours.filter(t => t.id !== id);

                // Shuffle mảng các tour ngẫu nhiên
                const shuffledTours = shuffleArray(filteredTours);

                // Chọn 8 tour ngẫu nhiên và lưu vào state
                setRandomTours(shuffledTours.slice(0, 8));
            } catch (error) {
                console.error('Error fetching random tours:', error);
            }
        };

        fetchRandomTours();
    }, [id]);

    // Hàm shuffle mảng
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    

    if (!tour) return <div>Loading...</div>;

    return (
        <div>
            <Header />

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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 border border-4 p-3 mb-2 bg-light text-dark ">
                        <h5>Chương trình tour</h5>
                        {tour.detail.map(day => (
                            <div key={day.id} className="mt-4">
                                <h6>{day.name}</h6>
                                {day.route.map((routeItem, index) => (
                                    <div key={index} className="ml-3">
                                        {routeItem.time && <p><strong>{routeItem.time}</strong></p>}
                                        <p>{routeItem.description}</p>
                                        <img src={routeItem.image} alt='' />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 border border-4 p-3 mb-2 bg-light text-dark ">
                        <span className='fs-3 text-primary'>Hướng dẫn viên</span>
                        <div className='mt-4'>
                            Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 2-3 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyển đi.
                        </div>
                    </div>

                    <div className="mt-3 border border-4 p-3 mb-2 bg-light text-dark ">
                        <h5>Các Tour Ngẫu Nhiên</h5>
                        <div id="randomToursCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {randomTours.length > 0 && (
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {randomTours.slice(0, 4).map(tour => (
                                                <div key={tour.id} className="col-md-3">
                                                    <div className="card mb-3" style={{height:'420px'}}>
                                                        <img src={tour.image} className="card-img-top" alt={tour.name} />
                                                        <div className="card-body" style={{height:'200px'}}>
                                                            <h5 className="card-title fs-6">{tour.name}</h5>
                                                            <p className="card-text">{tour.date}</p>
                                                            <a href={`/product/${tour.id}`} className="btn btn-primary">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {randomTours.length > 4 && (
                                    <div className="carousel-item">
                                        <div className="row">
                                            {randomTours.slice(4, 8).map(tour => (
                                                <div key={tour.id} className="col-md-3">
                                                     <div className="card mb-3" style={{height:'420px'}}>
                                                        <img src={tour.image} className="card-img-top" alt={tour.name} />
                                                        <div className="card-body" style={{height:'200px'}}>
                                                            <h5 className="card-title fs-6">{tour.name}</h5>
                                                            <p className="card-text">{tour.date}</p>
                                                            <a href={`/product/${tour.id}`} className="btn btn-primary">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#randomToursCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Sau</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#randomToursCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Trước</span>
                            </button>
                        </div>
                    </div>
                    <HistoryView />

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
