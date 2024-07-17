import React, {useState} from 'react';
import { isEmailValid, isPhoneValid } from '../../util/InfoCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

export const FormInputInfoCustomer = (total) => {

    const [customerInfo, setCustomerInfo] = useState([]);
    const checkout = useSelector(state => state.checkout);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkingCustomerInfo = (index) => {
        if(customerInfo){
        const customer = customerInfo[index];
        try{
        if(customer.full_name
            && customer.phone
            && customer.email
        ){
            return true;
        } 
        } catch {

        }   
     }
        return false;
    }

    const handleInputChange = (index,type,value) => {
            setCustomerInfo((prevState) => {
                const updatedCustomerInfo = [...prevState];
                updatedCustomerInfo[index] = {
                     ...updatedCustomerInfo[index],
                         [type]: value
                };
            return updatedCustomerInfo;
        });
    }
    const handleSave = () => {
       const checkFirst = checkingCustomerInfo(0);
       const info  = customerInfo[0];
       if(!checkFirst){
            alert("Thông tin du khách đầu tiên không có")
            return;
       }
       
       if(!isEmailValid(info.email)){
        alert("Email của bạn không hợp lệ")
        return;
       }
       if(!isPhoneValid(info.phone)){
        alert("Số điện thoại  không đúng dạng VN")
        return;
       }
       redirctToPayment();
    }
    const redirctToPayment = () => {
        const id = checkout.id;
        dispatch({type: 'checkout.updatepassengerdetails', payload: {id: id, passenger_details:customerInfo} });
        navigate(`/payment`);
    }
    let forms = [];
    for (let i = 0; i < total.quantity; i++) {
        let stt = 1 + i;
        forms.push(<>
        <h3 key={i}>Thông tin du khách #{stt}</h3>
        <div className='row'>
            <div className="col-md-6 mt-1">
                                    <div className="form-group">
                                        <label>Tên :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`full_name-${i}`}
                                            placeholder="Họ và tên"
                                            onChange={(e) => handleInputChange(i, "full_name", e.target.value)}
                                        /></div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id={`email-${i}`}
                                            placeholder="abc@gmail.com"

                                            onChange={(e) => handleInputChange(i, "email", e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`phone-${i}`}
                                            placeholder="Nhập số điện thoại"
                                            onChange={(e) => handleInputChange(i, "phone", e.target.value)}  
                                            />
                                    </div>
                                    
                      </div>              
            </div>
        </>
    );
        
    }
    
return (<>
    {forms}
    <button className = "btn btn-primary" onClick={handleSave}>Tiếp tục</button>
</>);


};