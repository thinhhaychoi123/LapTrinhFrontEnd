import { useSelector } from "react-redux";
import { Process } from "../../component/Process";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { FormInputInfoCustomer } from "../../component/checkout/FormInputInfoCustomer";

const Booking = () => {
    
    const checkout = useSelector(state => state.checkout);
    const quantity = checkout.quantityAdult + checkout.quantityChild;
    return (<div>
        <Header/>
        <Process step = '3'/>
            <h1>Điền thông tin </h1>
            <FormInputInfoCustomer quantity = {quantity}></FormInputInfoCustomer>
        <Footer/>
    </div>);
};

export default Booking;