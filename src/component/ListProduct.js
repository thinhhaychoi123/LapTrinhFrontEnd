import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { Link } from "react-router-dom";
import "../css/style.css"
import Header from "./Header";

const ListProduct = () => {
    const [tours, setTours] = useState([]);
    const [locationEnd, setLocationEnd] = useState('');
    const [sortBy, setSortBy] = useState(null);
    const [filters, setFilters] = useState({
        location: '',
        start: '',
        startDate: ''
    });
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tour');
                setTours(response.data); // Set fetched data into state
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        };

        fetchTours();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setFilters({
            location: params.get('location') || '',
            start: params.get('start') || '',
            startDate: params.get('startDate') || ''
        });
    }, [location.search]);

    const handleAddToCart = (tour) => {
        dispatch({ type: 'cart.add', payload: { product: tour } });
    };

    const handleRemoveFromCart = (tour) => {
        dispatch({ type: 'cart.remove', payload: { product: tour } });
    };

    const handleFilterLocationEnd = (location) => {
        setFilters({ ...filters, location: location });
        navigate(`/list?location=${location}&start=${filters.start}&startDate=${filters.startDate}&search=${searchTerm}`);
    };

    const sortTours = (filteredTours) => {
        switch (sortBy) {
            case 'recommend':
                return filteredTours; // Logic sắp xếp theo đề xuất của iVIVU
            case 'duration':
                return filteredTours.sort((a, b) => a.duration - b.duration); // Sắp xếp theo thời lượng tour
            case 'start_date':
                return filteredTours.sort((a, b) => new Date(a.start_day) - new Date(b.start_day)); // Sắp xếp theo ngày khởi hành
            case 'price':
                return filteredTours.sort((a, b) => a.price_Adult - b.price_Adult); // Sắp xếp theo giá tour
            default:
                return filteredTours;
        }
    };

    const getFilteredTours = () => {
        const { location, start, startDate } = filters;

        return tours.filter(tour => {
            const matchLocation = location ? tour.location_End.includes(location) : true;
            const matchStart = start ? tour.location_Start.includes(start) : true;
            const matchStartDate = startDate ? tour.start_day === startDate : true;
            const matchLocationEnd = locationEnd ? tour.location_End.includes(locationEnd) : true;
            const matchSearch = searchTerm ? (
                tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) : true;

            return matchLocation && matchStart && matchStartDate && matchLocationEnd && matchSearch;
        });
    };

    const filteredTours = getFilteredTours();
    const sortedTours = sortTours(filteredTours);

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to ListProduct with search params
        navigate(`/list?location=${filters.location}&start=${filters.start}&startDate=${filters.startDate}&search=${searchTerm}`);
    };

    return (
        <div>
            <Header />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} filters={filters} />
            <div className="container my-4">
            <h2 className="mb-4">Tour du lịch Úc từ Hồ Chí Minh</h2>
            <p>Khám phá Úc với iVIVU: Sydney năng động, Melbourne sành điệu, Uluru huyền bí. Hành trình khám phá văn hóa và thiên nhiên kỳ vĩ. Đặt tour ngay!</p>
            <div className="row mb-3">
                <div className="col-md-3 border">
                    <ul className="list-unstyled">
                        <li><strong className="fs-5">Tour HOT Nước Ngoài</strong></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Trung Quốc')}>Trung Quốc</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Thái Lan')}>Thái Lan</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Singapore')}>Singapore</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Nhật Bản')}>Nhật Bản</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Châu Âu')}>Châu Âu</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Hàn Quốc')}>Hàn Quốc</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Bali')}>Bali</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Campuchi')}>Campuchi</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Canada')}>Canada</a></li>
                    </ul>

                    <ul className="list-unstyled">
                        <li><strong className="fs-5">Tour HOT Trong Nước</strong></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Hạ Long')}>Hạ Long</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Nha Trang')}>Nha Trang</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Đà Nẵng')}>Đà Nẵng</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Sapa')}>Sapa</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Quy Nhơn')}>Quy Nhơn</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Phú Yên')}>Phú Yên</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Hà Nội')}>Hà Nội</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Buôn Mê Thuật')}>Buôn Mê Thuật</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Phú Quốc')}>Phú Quốc</a></li>
                        <li><a href="#" onClick={() => handleFilterLocationEnd('Miền Tây')}>Miền Tây</a></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                            <p className="text-muted mb-0">Sắp xếp theo:</p>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary me-2" onClick={() => setSortBy('recommend')}>iVIVU Đề xuất</button>
                            <button className="btn btn-outline-secondary me-2" onClick={() => setSortBy('duration')}>Thời gian</button>
                            <button className="btn btn-outline-info me-2" onClick={() => setSortBy('start_date')}>Ngày khởi hành</button>
                            <button className="btn btn-outline-dark me-2" onClick={() => setSortBy('price')}>Giá</button>
                        </div>
                        
                    </div>

                    {sortedTours.map(tour => (
                        <div key={tour.id} className="card mb-3 hsshadow" style={{ maxWidth: '800px' }}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex">
                                    <img src={tour.image} className="img-fluid rounded-start" alt={tour.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{tour.name}</h5>
                                        <p className="card-text">{tour.date} | {tour.start_day}</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text text-success">{tour.evaluate}</p>
                                            <p className="card-text text-warning fs-5">{tour.price_Adult} VNĐ</p>
                                        </div>
                                        <div>
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
                                        <Link to={`/product/${tour.id}`} className="btn btn-primary">Chi tiết</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default ListProduct;
