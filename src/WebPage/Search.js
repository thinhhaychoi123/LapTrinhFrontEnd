import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
    
    return (
        <div className="container search-bar">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className='d-block mb-2'>
                            <label htmlFor="location">Địa điểm:</label>
                            <select className="form-control" id="location">
                                <option value="">Tất cả</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                                <option value="Phú Quốc">Phú Quốc</option>
                                <option value="Trung Quốc">Trung Quốc</option>
                                <option value="Thái Lan">Thái Lan</option>
                                {/* Thêm các tùy chọn địa điểm khác */}
                            </select>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className="col-md-3 me-2">
                            <input type="date" className="form-control" defaultValue="2024-06-18" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Khởi hành từ" />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-warning w-100">Tìm</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
