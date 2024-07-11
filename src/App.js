import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from "./component/ListProduct";
import ProductDetail from "./component/ProductDetail";
import Home from "./WebPage/Home";
import Register from './WebPage/Register';
import ResetPass from "./WebPage/ResetPass";
import User from "./WebPage/User";
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
