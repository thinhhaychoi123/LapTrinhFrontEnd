import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/tour/${id}`);
                setTour(response.data); // Đặt dữ liệu vào state
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        };

        fetchTour();
    }, [id]);

    if (!tour) return <div>Loading...</div>; // Kiểm tra nếu tour chưa có dữ liệu

    return (
        <div>
            <h2>{tour.name}</h2>
            <img src={tour.image} alt={tour.name} />
            <p>Thời gian: {tour.date}</p>
            <p>Giá người lớn: {tour.price_Adult.toLocaleString()} VND</p>
            <p>Ngày khởi hành: {tour.start_day}</p>
            <p>Mô tả: {tour.description.content}</p>
        </div>
    );
};

export default ProductDetail;
