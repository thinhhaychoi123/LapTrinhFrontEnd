import React, { useState } from 'react';
import background from '../Image/background.png';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [location, setLocation] = useState('');
    const [start, setStart] = useState('');
    const [startDate, setStartDate] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to ListProduct with search params
        navigate(`/list?location=${location}&start=${start}&startDate=${startDate}`);
    };

    return (
        <div className="row mt-2 mb-4 position-relative" style={{
            height: '400px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}>
            <div className="col-md-6 offset-md-1 position-absolute top-50 start-0 translate-middle-y">
                <form className="row g-3 align-items-center" onSubmit={handleSearch}>
                    <div className="col-md-12">
                        <label htmlFor="location" className="form-label">Địa điểm:</label>
                        <select className="form-select" id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Tất cả</option>
                            <option value="Nha Trang">Nha Trang</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Trung Quốc">Trung Quốc</option>
                            <option value="Thái Lan">Thái Lan</option>
                            {/* Thêm các tùy chọn địa điểm khác */}
                        </select>
                    </div>
                    <div className="col-md-12 mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="startDate" className="form-label">Ngày đi:</label>
                                <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="start" className="form-label">Bắt đầu đi từ:</label>
                                <select className="form-select" id="start" value={start} onChange={(e) => setStart(e.target.value)}>
                                    <option value="">Bắt đầu đi từ</option>
                                    <option value="Hà Nội">Thành phố Hồ Chí Minh</option>
                                    <option value="Đà Nẵng">Hà Nội</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Trung Quốc">Trung Quốc</option>
                                    <option value="Thái Lan">Thái Lan</option>
                                    {/* Thêm các tùy chọn địa điểm khác */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <button type="submit" className="btn btn-warning w-100">Tìm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
