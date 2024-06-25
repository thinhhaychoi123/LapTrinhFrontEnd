import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./Store/Store";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/web";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
