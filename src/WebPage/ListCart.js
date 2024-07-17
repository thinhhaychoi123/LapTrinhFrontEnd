import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ListCart = () => {
    const cart = useSelector(state => state.cart)
    const [isLogin,setLogin] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectTourMethod = (tour) => ({
        type: 'selectTour.select', payload: tour 
    });
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (storedUsername) {
            setLogin(true)
        }
    }, []);
    const handleSelectCart = (tour) => {
        if(!isLogin){ 
            //Nếu người dùng chưa đăng nhập, thông báo cho họ và dừng thực hiện các bước thanh toán
            alert('Bạn phải đăng nhập thì mới được phép sử dụng thanh toán')
            return;
        }
        dispatch(selectTourMethod(tour));
        navigate(`/ticket`);
    };
    const handleRemoveFromCart = (tour) => {
        dispatch({ type: 'cart.remove', payload: { product: tour } });
    };

    return (<div>
        <Header/>
        <h2 className="mb-4">Giỏ hàng cần thanh toán</h2>
            {cart.map(tour => (
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
                           <button className="btn btn-primary" onClick={() => handleSelectCart(tour)}>Thanh toán</button>
                           <button className="btn btn-danger" onClick={() => handleRemoveFromCart(tour)}>Xóa khỏi giỏ</button>
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


export default ListCart;