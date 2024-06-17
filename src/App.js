// --------------------------------App.js----------------------------------------------
import products from "./data/ProductData";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadProducts} from "./Store/Action";
import {Outlet} from "react-router-dom";

function App() {
  const disPatch = useDispatch();
  useEffect(() => {
      disPatch(loadProducts(products));
  });
  return (
      <div>
              <Outlet></Outlet>
      </div>
  );
}

export default App;
// --------------------------------------------------
