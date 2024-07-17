import UserData from '../data/userdata.json'
import React ,{useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const HistoryCart = () => {
    const [filters_data, setFiltersData] = useState([]);
    const navigate = useNavigate();
    const checkoutlist = UserData.checkout;
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
        if (!storedUsername) {
            navigate(`/user`); //Dẫn user về login, nếu chưa đăng nhập
            return;
        }
    }, [navigate]);
    useEffect(() => {
        const loadData = () => {
        const id = sessionStorage.getItem('id_user');
        const filterlist = checkoutlist.filter(list => {
            return id == list.userId;
        });
        setFiltersData(filterlist);
        };
        loadData();
    },[setFiltersData]);

    const deleteDataByTourId = async (iddata) => {
        fetch("http://localhost:3002/checkout/"+iddata, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                console.log("Xóa thanh toán thành công")
            } else {
                throw new Error('Failed to checkout');
            }
        })
        .catch(error => {
            console.log("Lỗi khi xóa thanh toán")
        });
    }

    return (<div>
        <Header/>
        <h2 className="mb-4">Đã thanh toán</h2>
             {
                filters_data.map(carts => (
                    <div key={carts.tour.id} className="card mb-3 hsshadow" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                            <img src={carts.tour.image} className="img-fluid rounded-start" alt={carts.tour.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{carts.tour.name}</h5>
                                <p className="card-text">{carts.tour.date} | {carts.tour.start_day}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text text-success">{carts.tour.evaluate}</p>
                                    <p className="card-text text"> </p>
                                    <p className="card-text text">Tổng tiền: </p>
                                    <p className="card-text text-success fs-5">{carts.total_price} VNĐ</p>
                                </div>
                                <div>
                                <button className="btn btn-danger" onClick={e => deleteDataByTourId(carts.id)}>Xóa khỏi thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                
                 )
        }
        <Footer/> 

    </div>);
}

export default HistoryCart;