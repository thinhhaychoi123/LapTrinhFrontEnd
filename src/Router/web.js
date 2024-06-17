// ---------------------------web.js---------------------------
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ProductList from "../component/ProductList";
import ProductDetail from "../component/ProductDetail";
import {loadProduct} from "../component/ProductDetail";
import Error from "../component/Error";
import {News} from "../component/News";
import React from "react";
import Navbar from "../WebPage/Navbar";
import Search from "../WebPage/Search";
import Footer from "../WebPage/Footer";
import Service from "../WebPage/Service";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: (
                    <>
                        <Navbar />
                        <Search />
                        <Service />
                        <ProductList />
                        <Footer />
                    </>
                ),
            },
            {
                path: 'list-product',
                element: <ProductList />
            },
            {
                path: 'product/:id',
                element: <ProductDetail />,
                loader: loadProduct,
            }
        ]
    },
    {
        path: '/news',
        element: <News />,
        errorElement: <Error />,
    }
]);
// ---------------------------------------------------------