// --------------------------------App.js----------------------------------------------
import products from "./data/ProductData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "./Store/Action";
import { Outlet } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts(products));
    }, [dispatch]);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default App;

// --------------------------------------------------