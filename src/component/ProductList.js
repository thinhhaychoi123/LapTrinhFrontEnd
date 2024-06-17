// ---------------------ProductList.js---------------------
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartInfo } from "./CartInfo";
import { Link } from "react-router-dom";

export default function ProductList() {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <CartInfo />
            <div className="row">
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

function Product(data) {
    const [product, setProduct] = useState(data);
    const dispatch = useDispatch();

    const changeColor = () => {
        if (product.isBuying) {
            dispatch({ type: 'cart.minus', payload: { product } });
        } else {
            dispatch({ type: 'cart.add', payload: { product } });
        }
        setProduct(prevState => ({
            ...prevState,
            color: prevState.color === 'blue' ? 'red' : 'blue',
            isBuying: !prevState.isBuying
        }));
    }

    return (
        <div className="col" style={{ width: '18rem' }}>
            <div className="card h-100">

            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"> <i class="bi bi-clock"></i> {product.time}</p>
                <p className="card-text "> <i class="bi bi-calendar-event"></i> {product.schedule}</p>
                <p className="card-text text-warning fs-4 fw-bolder">{product.price} VNĐ</p>
                <a
                    onClick={changeColor}
                    className={`btn text-center p-2 pl-2 pr-2 ${product.color === 'red' ? 'btn-danger' : 'btn-primary'}`}
                >
                    {product.isBuying ? "LOẠI BỎ" : "THÊM"}
                </a>
                <Link to={`/product/${product.id}`} className="btn btn-success p-2 pl-2 pr-2">
                    XEM
                </Link>
            </div>
            </div>
        </div>
    );
}
// -----------------------------------
