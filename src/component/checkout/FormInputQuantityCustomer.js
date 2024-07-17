import React,{useState} from "react";

export const FormInputQuantityCustomer = ({tour,handleContinue}) => {
   
    const [quantityAdult, setQuantityAdult] = useState("");
    const [quantityChild, setQuantityChild] = useState("");
    
    const updateWhenChange = (event,bool) =>{
        if(event.target.value){

        
       if(event.target.value < 0){
            event.target.value = 0;
       } 
       if(bool) setQuantityAdult(event.target.value);
       else setQuantityChild(event.target.value);
    }
    }
    var total_adult = 0;
    var total_child = 0;
    if(quantityAdult){
        total_adult = parseInt(quantityAdult);
    }
    if(quantityChild){
        total_child = parseInt(quantityChild);
    }
    var temp = total_adult + total_child;

    var cost1 = total_adult * parseInt(tour.price_Adult);
    var cost2 = total_child * parseInt(tour.price_Childern);
    var totalcost = cost1 + cost2;
    
    
    const continueToBooking = () =>{
        if(temp == 0){
            alert("Không được đặt vé trống");
            return;
        }
        if(total_adult == 0 && total_child > 0){
            alert("Phải đặt ít nhất 1 vé người lớn");
            return;
        }
        handleContinue(total_adult,total_child,totalcost);
    }
    return (<div>
        <div className="col-md-8" >
            <div className="card-body" style={ {justifyContent : 'center',alignItems: 'center'} }>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Số lượng vé cho người lớn</label>
                                    <input 
                                    required 
                                    type="number" 
                                    defaultValue = "0" 
                                    min = "0" 
                                    step = "1" 
                                    onChange={e => updateWhenChange(e,true)}
                                    className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Số lượng vé cho trẻ em</label>
                                    <input 
                                    required 
                                    type="number" 
                                    defaultValue = "0" 
                                    min = "0" 
                                    step = "1" 
                                    onChange={e => updateWhenChange(e,false)}
                                    className="form-control" />
                                </div>
                                <h2>Tổng số vé: {temp}</h2>
                                <h2>Tổng tiền: {totalcost} VNĐ</h2>
                                <button className = "btn btn-primary"onClick={e => continueToBooking()}>Tiếp tục</button>
                            </div>
                            </div>
                            
            </div>
        </div>
    </div>);
}