import React, {useState,useEffect} from 'react';
import { Process } from '../../component/Process';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ItemSeenCheckout } from '../../component/checkout/ItemSeenCheckout';

const Checkout = () => {
    const [isChecked, setIsChecked] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkout = useSelector(state => state.checkout);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (!storedUsername) {
            navigate(`/user`); //Dẫn user về login, nếu chưa đăng nhập
            return;
        }
        
    }, [navigate]);
    console.log(checkout.quantityAdult);
    const onHandleAddTour = (datatour) => {
        const id = sessionStorage.getItem('id_user');
        if(!id){
            alert("Bạn đã đăng xuất, vui lòng trở về và đăng nhập lại")
            return;
        }
        const userId = id;
        const tourId = datatour.id;
        const tour = datatour.tour;
        const quantityAdult = datatour.quantityAdult;
        const quantityChild = datatour.quantityChild;
        const total_price = datatour.total_price;
        const payment_method = datatour.payment_method;
        const passenger_details =  datatour.passenger_details
        const newTour = { userId,tourId, tour,quantityAdult, quantityChild, total_price, payment_method, passenger_details };
        sendToCheckoutData(newTour);
    }
    const sendToCheckoutData = (data) => {
        const id = uuidv4();
        fetch("http://localhost:3002/checkout", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log("Gửi lên nhóm thanh toán thành công")
                dispatch({ type: 'cart.remove', payload: { product: checkout.tour } });
                setIsChecked(true);
            } else {
                throw new Error('Failed to checkout');
            }
        })
        .catch(error => {
            console.log("Lỗi khi thanh toán")
        });
    }


    const onClickBuy = () => {
        onHandleAddTour(checkout);
    }
    
    return (<div>
        <Header/>
        {
            !isChecked ? 
            <>
             <Process step = '5'/>
             <ItemSeenCheckout datatour = {checkout} process={true}/>
             <h1>Bạn có muốn xác nhận là thanh toán không</h1>
             <button className = "btn btn-success" onClick={onClickBuy}>XÁC NHẬN</button>
            </>
            : <>
            <Process step = '6'/>
                <h1>Bạn đã xác nhận tour thành công !</h1>
                <h1>Hãy trở về Trang Chủ để xem những tour khác !</h1>
            </>
        }
                    <Footer/>
        
    </div>);
}

export default Checkout;