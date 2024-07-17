import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { useSelector ,useDispatch} from "react-redux";
import { Process } from "../../component/Process";
import { useNavigate } from "react-router-dom";
import { FormInputQuantityCustomer } from "../../component/checkout/FormInputQuantityCustomer";
import { useEffect } from "react";
import { ItemSeenCheckout } from "../../component/checkout/ItemSeenCheckout";

const QuantityInfo = () => {
    const tour = useSelector(state => state.selectTour);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (!storedUsername) {
            navigate(`/user`); //Dẫn user về login, nếu chưa đăng nhập
            return;
        }
    }, [navigate]);

    const handleContinue = (quantityAdult,quantityChild,total_price) => {
        try{
            const data = {
                id: tour.id,
                tour: tour,
                quantityAdult: quantityAdult,
                quantityChild: quantityChild,
                total_price: total_price,
                payment_method: -1,
                passenger_details: null
            }
            dispatch({type: 'checkout.setcheckout', payload: data });
            navigate(`/booking`);
        } catch {
            console.error("Lỗi khi lưu lại");
        }
    }

    return (
    <div>
        <Header/>
        <Process step = '2'/>
        <ItemSeenCheckout datatour = {tour} process={false}/>
        <FormInputQuantityCustomer tour = {tour} handleContinue = {handleContinue} /> 
        <Footer/>
    </div>);
};

export default QuantityInfo;