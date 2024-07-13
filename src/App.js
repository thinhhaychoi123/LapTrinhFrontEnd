<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from "./component/ListProduct";
import ProductDetail from "./component/ProductDetail";
import Home from "./WebPage/Home";
import Register from './WebPage/Register';
import ResetPass from "./WebPage/ResetPass";
import User from "./WebPage/User";
=======
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from "./WebPage/Home";
import ProductDetail from "./component/ProductDetail";
import ListProduct from "./component/ListProduct"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path='/list' element={<ListProduct />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
