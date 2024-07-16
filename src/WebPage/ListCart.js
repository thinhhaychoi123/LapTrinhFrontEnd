import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ListCart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectTourMethod = (tour) => ({
        type: 'selectTour.select', payload: tour 
    });
    
    const handleSelectCart = (tour) => {
        dispatch(selectTourMethod(tour));
        navigate(`/ticket`);
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