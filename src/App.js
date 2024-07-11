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

>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path='/list' element={<ListProduct />}/>
<<<<<<< HEAD
                    <Route path='/user' element={<User />}/>
                    <Route path='/register' element={<Register />}/>  
                    <Route path='/reset' element={<ResetPass />}/>                  
=======
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
