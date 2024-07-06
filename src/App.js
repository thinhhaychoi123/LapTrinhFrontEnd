import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from "./WebPage/Home";
import Header from './component/Header';
import ProductDetail from "./component/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
