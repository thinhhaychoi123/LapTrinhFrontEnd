// ---------------------------web.js---------------------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../component/Error";
import { News } from "../component/News";
import ProductDetail, { loadProduct } from "../component/ProductDetail";
import ProductList from "../component/ProductList";
import Footer from "../WebPage/Footer";
import ListTour from "../WebPage/ListTour";
import Navbar from "../WebPage/Navbar";
import Register from "../WebPage/Register";
import ResetPass from "../WebPage/ResetPass";
import Search from "../WebPage/Search";
import Service from "../WebPage/Service";
import User from "../WebPage/User";
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
            },
            {
                path: 'list-tour',
                element: <ListTour />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'reset',
                element: <ResetPass />
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