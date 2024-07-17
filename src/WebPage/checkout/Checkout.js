import React, {useState,useEffect} from 'react';
import { Process } from '../../component/Process';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    const onClickBuy = () => {
        dispatch({ type: 'cart.remove', payload: { product: checkout.tour } });
        dispatch({type: 'buycart.remove', payload: { product: checkout.tour }});
        dispatch({type: 'buycart.add', payload: { product: checkout }});
        setIsChecked(true);
    }
    
    return (<div>
        <Header/>
        {
            !isChecked ? 
            <>
             <Process step = '5'/>
             <button onClick={onClickBuy}>XÁC NHẬN</button>
            </>
            : <>
            <Process step = '6'/>
                <h1>Bạn đã xác nhận thành công @</h1>
                <h5>Hãy trở về Trang Chủ để xem những tour khác !</h5>
            </>
        }
                    <Footer/>
        
    </div>);
}

export default Checkout;