import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../WebPage/Navbar";
import Footer from "../WebPage/Footer";


export default function ListTour() {
    const [selectedLocation, setSelectedLocation] = useState('Tất cả');
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const filteredProducts = selectedLocation === 'Tất cả' ? products : products.filter(product => product.tour.includes(selectedLocation));


import products from "../data/ProductData";

export default function ListTour() {
    

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h1 className="mb-4">Tìm kiếm tour du lịch</h1>
                <div className="row">
                <div className="col-md-3">
                    {/* Bộ lọc sản phẩm */}
                    <div className="card">
                        <h5 className="card-header">Bộ lọc</h5>
                        <div className="card-body">
                            {/* Lọc theo địa điểm */}
                            <div className="form-group">
                                <label htmlFor="location">Địa điểm:</label>

                                <select className="form-control" id="location" value={selectedLocation} onChange={handleLocationChange}>

                                <select className="form-control" id="location" >

                                    <option>Tất cả</option>
                                    <option>Hà Nội</option>
                                    <option>Đà Nẵng</option>
                                    <option>Phú Quốc</option>
                                    <option>Trung Quốc</option>
                                    {/* Thêm các tùy chọn địa điểm khác */}
                                </select>
                            </div>

                            {/* Lọc theo thời gian */}
                            <div className="form-group">
                                <label htmlFor="duration">Thời gian:</label>
                                <select className="form-control" id="duration">
                                    <option>Tất cả</option>
                                    <option>3 ngày 2 đêm</option>
                                    <option>Mùa hè 2024</option>
                                    <option>Cuối tuần</option>
                                    {/* Thêm các tùy chọn thời gian khác */}
                                </select>
                            </div>

                            {/* Lọc theo giá tour */}
                            <div className="form-group">
                                <label>Giá tour:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="price1" />
                                    <label className="form-check-label" htmlFor="price1">
                                        Dưới 1 triệu
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="price2" />
                                    <label className="form-check-label" htmlFor="price2">
                                        Từ 1-5 triệu
                                    </label>
                                </div>
                                {/* Thêm các tùy chọn giá tour khác */}
                            </div>


                            <button type="button" className="btn btn-primary" onClick={() => setSelectedLocation(selectedLocation)}>Áp dụng bộ lọc</button>

                            <button type="button" className="btn btn-primary">Áp dụng bộ lọc</button>

                            </div>
                    </div>
                </div>
                    <div className="col-md-9">
                    <h2>Danh sách sản phẩm</h2>


                        {filteredProducts.map(product => (

                        {products.map(product => (

                            <Product 
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                time={product.time}
                                image={product.image}
                                schedule={product.schedule}
                                location={product.location}
                                content={product.content}
                                price={product.price}
                                start ={product.start}
                                image1={product.image1}
                                point={product.point}
                                tour = {product.tour}


                                url={product.url}
                                votes={product.votes}
                                submitterAvatarUrl={product.submitterAvatarUrl}
                                color={product.color}
                                isBuying={product.isBuying}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div> 
    );

}
function Product({ id, name, time, image, schedule, price, color, isBuying, point }) {
    const dispatch = useDispatch();

    const changeColor = () => {
        if (isBuying) {
            dispatch({ type: 'cart.minus', payload: { product: { id } } });
        } else {
            dispatch({ type: 'cart.add', payload: { product: { id, name, time, image, schedule, price, color, isBuying } } });
        }
    };
    return (
        <div className="card mb-3" style={{ maxWidth: '1000px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid" alt={name} style={{height: "-webkit-fill-available"}}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                        <p className="card-text"><i class="bi bi-calendar"></i> {schedule}</p>
                        <p className="card-text"><i class="bi bi-clock"></i> {time}</p>
                        <p className="card-text text-success fw-bolder">{point}</p>

                            <div className="text-end d-flex justify-content-between">

                            <p className="card-text fs-3 text-warning fw-bold .mt-0">{price} VNĐ</p>

                            <div className="d-flex justify-content-around" style={{width: '120px'}}>

                            <a
                            onClick={changeColor}
                            className={`btn text-center p-2 pl-2 pr-2 ${color === 'red' ? 'btn-danger' : 'btn-primary'}`}
                        >
                            {isBuying ? "LOẠI BỎ" : "THÊM"}
                        </a>
                        <Link to={`/product/${id}`} className="btn btn-success p-2 pl-2 pr-2">
                            XEM
                        </Link>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}