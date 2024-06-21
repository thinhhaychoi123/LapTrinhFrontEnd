import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../Image/background.png';

const Search = () => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [departure, setDeparture] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/list-tour?location=${location}&startDate=${startDate}&departure=${departure}`);
    };

    return (
        <div className="search-bar" style={{
            height:'400px',
            backgroundImage: `url(${background})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat'}}>
            <form onSubmit={handleSubmit}>
                <div className="row position-relative" style={{ left:'200px', top:'60px' }}>
                    <div className="col-md-4">
                        <div className='d-block mb-2'>
                            <label htmlFor="location">Địa điểm:</label>
                            <select 
                                className="form-control" 
                                id="location" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="">Tất cả</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Đà Nẵng">Thái Lan</option>
                                <option value="Phú Quốc">Phú Quốc</option>
                                <option value="Trung Quốc">Trung Quốc</option>
                                <option value="Thái Lan">Thái Lan</option>
                                {/* Thêm các tùy chọn địa điểm khác */}
                            </select>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className="col-md-3 me-2">
                            <input 
                                type="date" 
                                className="form-control" 
                                value={startDate} 
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Khởi hành từ" 
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-warning w-100">Tìm</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;
