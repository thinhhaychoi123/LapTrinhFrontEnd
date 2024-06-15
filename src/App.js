import logo from './logo.svg';
import './App.css';
import products from "./data/ProductData";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadProducts} from "./Store/Action";
import {Outlet} from "react-router-dom";
import Home from './WebPage/Home';
import ProductList from './component/ProductList';

function App() {
  const disPatch = useDispatch();
  useEffect(() => {
      disPatch(loadProducts(products));
  });
  return (
      <div>
              <Home/>
              <p>HELLO WORLD</p>
              <Outlet></Outlet>
      </div>
  );
}

export default App;
