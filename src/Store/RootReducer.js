// -----------------------RootReducer.js-----------------------
import { createReducer } from '@reduxjs/toolkit';

const initState = {
    products: [],
    cart: checkCart(),
}

export const root = createReducer(initState, (builder) => {
    builder
        .addCase('product.load', (state, action) => {
            let products = action.payload.products;
            let out = [];
            let cart = checkCart();
            lop1: for (const p of products) {
                for (const c of cart) {
                    if (c.id === p.id) {
                        out.push({ ...p, isBuying: true, color: 'red' });
                        continue lop1;
                    }
                }
                out.push({ ...p, isBuying: false, color: 'blue' });
            }

            state.products = out;
        })
        .addCase('cart.add', (state, action) => {
            if (!state.cart) state = checkCart();
            state.cart = [...state.cart, action.payload.product];
            saveCart(state.cart);
        })
        .addCase('cart.minus', (state, action) => {
            if (!state.cart) state = checkCart();
            let cart = state.cart.filter(product => product.id !== action.payload.product.id);
            state.cart = [...cart];
            saveCart(state.cart);
        })
});

function checkCart() {
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    return [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// ----------------------------------------