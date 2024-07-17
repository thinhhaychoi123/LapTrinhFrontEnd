import { useSelector } from "react-redux";
import { Process } from "../../component/Process";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { FormInputInfoCustomer } from "../../component/checkout/FormInputInfoCustomer";
import { ItemSeenCheckout } from "../../component/checkout/ItemSeenCheckout";

const Booking = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (!storedUsername) {
            navigate(`/user`); //Dẫn user về login, nếu chưa đăng nhập
            return;
        }
    }, [navigate]);
    const checkout = useSelector(state => state.checkout);
    const quantity = checkout.quantityAdult + checkout.quantityChild;
    return (<div>
        <Header/>
        <Process step = '3'/>
            <h1>Điền thông tin </h1>
            <ItemSeenCheckout datatour = {checkout} process={true}/>
            <FormInputInfoCustomer quantity = {quantity}></FormInputInfoCustomer>
        <Footer/>
    </div>);
};

export default Booking;