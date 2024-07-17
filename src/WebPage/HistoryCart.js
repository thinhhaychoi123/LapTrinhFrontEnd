import UserData from '../data/userdata.json'
import React ,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from 'axios';

const HistoryCart = () => {
    const [tours, setTours] = useState([]);
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
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tour');
                setTours(response.data); // Set fetched data into state
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        };
        fetchTours();
    }, []);
    useEffect(() => {
        const loadData = () => {
        const id = sessionStorage.getItem('id_user');
        const filterlist = checkoutlist.filter(list => {
            return id == list.userId;
        });
        setFiltersData(filterlist);
        };
        loadData();
    });

    const deleteDataByTourId = async (tourId) => {
        const find = filters_data.find(cart => cart.tourId == tourId);
        if(!find){
            return;
        }
        const iddata = find.id;
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

    const isFindTour = (from) => {
        return filters_data.find(e => {
            return from.id == parseInt(e.tourId);
        });
    }
    return (<div>
        <Header/>
        <h2 className="mb-4">Đã thanh toán</h2>
             {
                tours.map(tour => (
                    !isFindTour(tour) ? null : (
                    <div key={tour.id} className="card mb-3 hsshadow" style={{ maxWidth: '800px' }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                            <img src={tour.image} className="img-fluid rounded-start" alt={tour.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{tour.name}</h5>
                                <p className="card-text">{tour.date} | {tour.start_day}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text text-success">{tour.evaluate}</p>
                                    <p className="card-text text-warning fs-5">{tour.price_Adult} VNĐ</p>
                                </div>
                                <div>
                                <button className="btn btn-danger" onClick={e => deleteDataByTourId(tour.id)}>Xóa khỏi thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                
                 ))
        }
        <Footer/> 

    </div>);
}

export default HistoryCart;