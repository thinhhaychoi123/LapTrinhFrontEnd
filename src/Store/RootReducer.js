// -----------------------RootReducer.js-----------------------
import { createReducer } from '@reduxjs/toolkit';

const initState = {
    products: [],
    cart: checkCart(),
};

export const root = createReducer(initState, (builder) => {
    builder
        .addCase('product.load', (state, action) => {
            state.products = action.payload.products;
        })
        .addCase('cart.add', (state, action) => {
            const productToAdd = action.payload.product;
            state.cart.push(productToAdd);

            // Cập nhật trạng thái của sản phẩm trong danh sách sản phẩm
            state.products = state.products.map(p => {
                if (p.id === productToAdd.id) {
                    return { ...p, isBuying: true, color: 'red' };
                }
                return p;
            });

            saveCart(state.cart);
        })
        .addCase('cart.minus', (state, action) => {
            const productToRemove = action.payload.product;
            state.cart = state.cart.filter(p => p.id !== productToRemove.id);

            // Cập nhật trạng thái của sản phẩm trong danh sách sản phẩm
            state.products = state.products.map(p => {
                if (p.id === productToRemove.id) {
                    return { ...p, isBuying: false, color: 'blue' };
                }
                return p;
            });

            saveCart(state.cart);
        })
    
});

function checkCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}


// ----------------------------------------