import React, { useState } from 'react';
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
        <div className="col-md-8 offset-md-2">
            <form className="card card-body" onSubmit={handleSearch}>
                <div className="row g-3 align-items-center">
                    <div className="col-md-4">
                        <label htmlFor="location" className="form-label">Địa điểm:</label>
                        <select className="form-select" id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="" disabled selected>Bạn muốn đi đâu</option>
                            <option value="Nha Trang">Nha Trang</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Trung Quốc">Trung Quốc</option>
                            <option value="Châu Âu">Châu Âu</option>
                            <option value="Nhật Bản">Nhật Bản</option>
                            <option value="Hàn Quốc">Hàn Quốc</option>
                            {/* Thêm các tùy chọn địa điểm khác */}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="startDate" className="form-label">Ngày đi:</label>
                        <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="start" className="form-label">Bắt đầu đi từ:</label>
                        <select className="form-select" id="start" value={start} onChange={(e) => setStart(e.target.value)}>
                            <option value="">Bắt đầu đi từ</option>
                            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Trung Quốc">Trung Quốc</option>
                            <option value="Thái Lan">Thái Lan</option>
                            {/* Thêm các tùy chọn địa điểm khác */}
                        </select>
                    </div>
                    <div className="col-md-12 mt-3">
                        <button type="submit" className="btn btn-warning w-100">Tìm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;
