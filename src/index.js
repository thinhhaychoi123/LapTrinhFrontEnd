import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./Store/Store";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router/web";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);
