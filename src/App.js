import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from "./WebPage/Home";
import ProductDetail from "./component/ProductDetail";
import ListProduct from "./component/ListProduct"
import User from  "./component/User"
import Register from "./component/Register"
import ResetPass from "./component/ResetPass"
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path='/list' element={<ListProduct />}/>
                    <Route path='/user' element={<User />}/>
                    <Route path='/register' element={<Register />}/>  
                    <Route path='/reset' element={<ResetPass />}/> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
