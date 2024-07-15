import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { useSelector } from "react-redux";
import { Process } from "../../component/Process";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormInputQuantityCustomer } from "../../component/checkout/FormInputQuantityCustomer";

const QuantityInfo = () => {
    const tour = useSelector(state => state.selectTour);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            console.error("Loi khi tam luu");
        }
    }

    return (
    <div>
        <Header/>
        <Process step = '2'/>
        
        <h1>Tên tour names: {tour.name}</h1>
            <FormInputQuantityCustomer tour = {tour} handleContinue = {handleContinue} />
        <Footer/>
    </div>);
};

export default QuantityInfo;