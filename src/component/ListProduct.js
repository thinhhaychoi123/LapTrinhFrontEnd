import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from "./Search";
import { Link } from "react-router-dom";
import "../css/style.css";
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
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState('');
    const itemsPerPage = 10;

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
        setSelectedLocation(location);
        navigate(`/list?location=${location}&start=${filters.start}&startDate=${filters.startDate}&search=${searchTerm}`);
    };

    const sortTours = (filteredTours) => {
        switch (sortBy) {
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

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to ListProduct with search params
        navigate(`/list?location=${filters.location}&start=${filters.start}&startDate=${filters.startDate}&search=${searchTerm}`);
    };

    const filteredTours = getFilteredTours();
    const sortedTours = sortTours(filteredTours);

    const indexOfLastTour = currentPage * itemsPerPage;
    const indexOfFirstTour = indexOfLastTour - itemsPerPage;
    const currentTours = sortedTours.slice(indexOfFirstTour, indexOfLastTour);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Header />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} filters={filters} />
            <div className="container my-4">
                <h2 className="mb-4">Tour du lịch trong nước và ngoài nước</h2>
                <p>Hãy để chúng tôi dẫn dắt bạn đến những địa điểm tuyệt vời và khám phá những câu chuyện thú vị đằng sau mỗi địa danh trên hành trình của bạn!</p>
                <div className="row mb-3">
                    <div className="col-md-3 border">
                        <ul className="list-unstyled">
                            <li><strong className="fs-5">Tour HOT Nước Ngoài</strong></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Trung Quốc' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Trung Quốc')}>Trung Quốc</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Thái Lan' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Thái Lan')}>Thái Lan</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Singapore' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Singapore')}>Singapore</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Nhật Bản' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Nhật Bản')}>Nhật Bản</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Châu Âu' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Châu Âu')}>Châu Âu</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Hàn Quốc' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Hàn Quốc')}>Hàn Quốc</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Bali' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Bali')}>Bali</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Campuchi' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Campuchi')}>Campuchi</a></li>
                            <li><a href="#" className={`shadowRed ${selectedLocation === 'Canada' ? 'selected' : ''}`} onClick={() => handleFilterLocationEnd('Canada')}>Canada</a></li>
                        </ul>

                        <ul className="list-unstyled">
                            <li><strong className="fs-5">Tour HOT Trong Nước</strong></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Hạ Long')}>Hạ Long</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Nha Trang')}>Nha Trang</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Đà Nẵng')}>Đà Nẵng</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Sapa')}>Sapa</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Quy Nhơn')}>Quy Nhơn</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Phú Yên')}>Phú Yên</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Hà Nội')}>Hà Nội</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Buôn Mê Thuật')}>Buôn Mê Thuật</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Phú Quốc')}>Phú Quốc</a></li>
                            <li><a href="#" className="shadowRed" onClick={() => handleFilterLocationEnd('Miền Tây')}>Miền Tây</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <p className="text-muted mb-0">Sắp xếp theo:</p>
                            </div>
                            <div>
                                    <button onClick={() => setSortBy('duration')} className={`btn btn-outline-success btn-sm me-2 ${sortBy === 'duration' ? 'btn-selected' : ''}`}>Thời lượng tour</button>
                                    <button onClick={() => setSortBy('start_date')} className={`btn btn-outline-success btn-sm me-2 ${sortBy === 'start_date' ? 'btn-selected' : ''}`}>Ngày khởi hành</button>
                                    <button onClick={() => setSortBy('price')} className={`btn btn-outline-success btn-sm ${sortBy === 'price' ? 'btn-selected' : ''}`}>Giá tour</button>
                            </div>
                        </div>

                        {currentTours.map(tour => (
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

                        <nav>
                            <ul className="pagination">
                                {[...Array(Math.ceil(sortedTours.length / itemsPerPage)).keys()].map(number => (
                                    <li key={number + 1} className="page-item">
                                        <a onClick={() => paginate(number + 1)} href="#" className="page-link">
                                            {number + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
