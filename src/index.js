import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./Store/Store";
import App from './App';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
        root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
} else {
    console.error('ERROR');
}
