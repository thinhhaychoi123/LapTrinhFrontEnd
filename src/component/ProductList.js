// ---------------------ProductList.js---------------------
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductList() {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                {products.map(product => (
                    <Product 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        time={product.time}
                        image={product.image}
                        schedule={product.schedule}
                        location={product.location}
                        content={product.content}
                        price={product.price}
                        start ={product.start}
                        image1={product.image1}
                        point={product.point}
                        tour = {product.tour}


                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        color={product.color}
                        isBuying={product.isBuying}
                    />
                ))}
            </div>
        </div>
    );
}

function Product({ id, name, time, image, schedule, price, color, isBuying }) {
    const dispatch = useDispatch();

    const changeColor = () => {
        if (isBuying) {
            dispatch({ type: 'cart.minus', payload: { product: { id } } });
        } else {
            dispatch({ type: 'cart.add', payload: { product: { id, name, time, image, schedule, price, color, isBuying } } });
        }
    };

    return (
        <div className="col" style={{ width: '18rem' }}>
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><i className="bi bi-clock"></i> {time}</p>
                    <p className="card-text"><i className="bi bi-calendar-event"></i> {schedule}</p>
                    <p className="card-text text-warning fs-4 fw-bolder">{price} VNĐ</p>
                    <a
                        onClick={changeColor}
                        className={`btn text-center p-2 pl-2 pr-2 ${color === 'red' ? 'btn-danger' : 'btn-primary'}`}
                    >
                        {isBuying ? "LOẠI BỎ" : "THÊM"}
                    </a>
                    <Link to={`/product/${id}`} className="btn btn-success p-2 pl-2 pr-2">
                        XEM
                    </Link>
                </div>
            </div>
        </div>
    );
}

// -----------------------------------