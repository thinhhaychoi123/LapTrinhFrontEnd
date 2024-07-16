import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const HistoryCart = () => {
    const boughtcart = useSelector(state => state.boughtcart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (!storedUsername) {
            navigate(`/user`); //Dẫn user về login, nếu chưa đăng nhập
            return;
        }
    }, [navigate]);
    const handleRemoveBoughtCart = (tour) => {
        dispatch({type: 'buycart.remove', payload: {product:tour}});
    };
    return (<div>
        <Header/>
        <h2 className="mb-4">Đã thanh toán</h2>
             {
                boughtcart.map(listcart => (
                    <div key={listcart.tour.id} className="card mb-3 hsshadow" style={{ maxWidth: '800px' }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                            <img src={listcart.tour.image} className="img-fluid rounded-start" alt={listcart.tour.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{listcart.tour.name}</h5>
                                <p className="card-text">{listcart.tour.date} | {listcart.tour.start_day}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text text-success">{listcart.tour.evaluate}</p>
                                    <p className="card-text text-warning fs-5">{listcart.tour.price_Adult} VNĐ</p>
                                </div>
                                <div>
                                <button className="btn btn-primary" onClick={() => handleRemoveBoughtCart(listcart.tour)}>Xóa khỏi thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 ))
        }
        <Footer/> 

    </div>);
}

export default HistoryCart;