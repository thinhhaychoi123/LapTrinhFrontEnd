// ------------------ProductDetail.js-------------------
import { useLoaderData, useNavigate } from "react-router-dom";
import productData from "../data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../WebPage/Navbar";
import Footer from "../WebPage/Footer";

async function getProduct(id) {
    return productData.find((product) => product.id == id);
}

export async function loadProduct({ params }) {
    const product = await getProduct(params.id);
    console.log(product);
    return product;
}

export default function ProductDetail() {
    const product = useLoaderData();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const adultPrice = 1600000; // Example price
    const totalPrice = adults * adultPrice + children * (adultPrice / 2);

    if (!product) {
        return <div>Loading...</div>;
    }

    const isInCart = cart.some(item => item.id === product.id);

    const addToCart = () => {
        dispatch({ type: 'cart.add', payload: { product } });
    };

    const removeFromCart = () => {
        dispatch({ type: 'cart.minus', payload: { product } });
    };

    const handleAdultChange = (value) => {
        setAdults(value >= 1 ? value : 1);
    };

    const handleChildrenChange = (value) => {
        setChildren(value >= 0 ? value : 0);
    };

    return (
        <div>
            <Navbar />
            <section id="productDetails" className="pb-5">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="text-primary">{product.name}</h1>
                            <div className="position-relative">
                                <img src={product.image1} alt={product.name} className="img-fluid" />
                                <div className="d-flex justify-content-around border-success p-2">
                                    <span><i className="bi bi-geo-alt-fill"></i>{product.start}</span>
                                    <span><i className="bi bi-clock"></i>{product.time}</span>
                                    <span>Phương tiện:<i className="bi bi-bus-front"></i><i className="bi bi-airplane"></i></span>
                                </div>
                                <div className="mt-4">
                                    <p className="fs-2 text-primary">{product.location}</p>
                                    <p>
                                        Đây là một tour du lịch đặc biệt kéo dài 4 ngày 3 đêm qua các thành phố nổi tiếng của Trung Quốc như Thượng Hải, Tô Châu, Ô Trấn và Hàng Châu. 
                                        Quý khách sẽ có cơ hội tham quan những địa danh lịch sử, trải nghiệm văn hóa phong phú và thưởng thức các món ăn đặc sản. 
                                        Đừng bỏ lỡ cơ hội tuyệt vời này để khám phá vẻ đẹp và sự quyến rũ của vùng đất này.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-2">{product.description}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Lịch khởi hành & giá</h5>
                                    <div className="form-group">
                                        <label htmlFor="date-select">Chọn ngày khởi hành:</label>
                                        <select id="date-select" className="form-control">
                                            <option>23/06/2023</option>
                                            <option>30/06/2023</option>
                                            <option>14/07/2023</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Người lớn:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button" 
                                                    onClick={() => handleAdultChange(adults > 1 ? adults - 1 : 1)}
                                                >-</button>
                                            </div>
                                            <input 
                                                type="number" 
                                                className="form-control text-center" 
                                                value={adults} 
                                                readOnly 
                                            />
                                            <div className="input-group-append">
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button" 
                                                    onClick={() => handleAdultChange(adults + 1)}
                                                >+</button>
                                            </div>
                                        </div>
                                        <p className="text-right mt-1 ">{adults} x 1.600.000 VND</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Trẻ em:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button" 
                                                    onClick={() => handleChildrenChange(children > 0 ? children - 1 : 0)}
                                                >-</button>
                                            </div>
                                            <input 
                                                type="number" 
                                                className="form-control text-center" 
                                                value={children} 
                                                readOnly 
                                            />
                                            <div className="input-group-append">
                                                <button 
                                                    className="btn btn-outline-secondary" 
                                                    type="button" 
                                                    onClick={() => handleChildrenChange(children + 1)}
                                                >+</button>
                                            </div>
                                        </div>
                                        <p className="text-right mt-1">{children} x 800.000 VND</p>
                                    </div>
                                    <p className="text-muted">Liên hệ để xác nhận chỗ</p>
                                    <p className="font-weight-bold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
                                    <button type="button" className="btn btn-warning w-100 mb-2">Liên hệ tư vấn</button>
                                    
                                    {isInCart ? (
                                        <button
                                            type="button"
                                            className="btn btn-danger w-100 mb-2"
                                            onClick={removeFromCart}
                                        >
                                            Loại bỏ
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn btn-primary w-100"
                                            onClick={addToCart}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    )}
                                </div>
                            </div>
                            <ul className="list-unstyled mt-3">
                                <li><i className="bi bi-check-lg text-success"></i> Bảo hiểm</li>
                                <li><i className="bi bi-check-lg text-success"></i> Xe đưa đón</li>
                                <li><i className="bi bi-check-lg text-success"></i> Bữa ăn</li>
                                <li><i className="bi bi-check-lg text-success"></i> Hướng dẫn viên</li>
                                <li><i className="bi bi-check-lg text-success"></i> Khách sạn 4*</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
// -------------------------------------