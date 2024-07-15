import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './WebPage/Home';
import ProductDetail from './component/ProductDetail';
import ListProduct from './component/ListProduct';
import Register from './WebPage/Register';
import ResetPass from "./WebPage/ResetPass";
import User from "./WebPage/User";
import ListCart from './WebPage/ListCart';
import QuantityInfoCustomer from './WebPage/checkout/QuantityInfoCustomer';
import Booking from './WebPage/checkout/Booking';
import Payment from './WebPage/checkout/Payment';
import Checkout from './WebPage/checkout/Checkout';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/product/:id" element={<ProductDetail/>} />
                    <Route path='/list' element={<ListProduct />} />
                    <Route path='/user' element={<User />}/>
                    <Route path='/register' element={<Register />}/>  
                    <Route path='/reset' element={<ResetPass />}/>   
                    <Route path='/cart' element={<ListCart/>}/>    
                    <Route path='/ticket' element={<QuantityInfoCustomer/>}/> 
                    <Route path='/booking' element={<Booking/>}/> 
                    <Route path='/payment' element={<Payment/>}/>     
                    <Route path='/checked' element={<Checkout/>}/>      
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
