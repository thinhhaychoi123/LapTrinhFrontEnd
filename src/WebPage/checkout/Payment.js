import React, { useState } from 'react';
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Process } from '../../component/Process';
import PaymentTypeMap from '../../data/payment.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Payment = () => {

    const [checkedRules, setCheckedRules] = useState();
    const [paymentType, setPaymentType] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCheckboxChange = (event) => {
        setCheckedRules(event.target.checked);
    };
    const handleOptionChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleContinue = (event) => {
        if(!checkedRules){
            alert("Hãy xác nhận điều khoản trước khi thanh toán")
            return;
        }
        dispatch({type: 'checkout.updatepaymenttype', payload: {payment_method:paymentType} });
        navigate(`/checked`);
    }

    return (<div>
        <Header/>
        <Process step = '4'/>
        <select  name="selectType" onChange={handleOptionChange}>
            {PaymentTypeMap.paymenttype.map((list,second) => (
                <>
                <option value={list.type}>{list.name}</option>
                </>
            ))};
            </select>
            <div className="col-md-12 mb-2">
                    <label className="font-weight-bold">
                                <input type="checkbox" id="agreement" name="agreement" required="required"
                                       checked={checkedRules}
                                       onChange={handleCheckboxChange}
                                /> Tôi đã đọc và đồng ý điều khoản
                            </label>
                            
                        </div>
            <button onClick={handleContinue}>Xác nhận</button>
        <Footer/>
    </div>);
}

export default Payment;