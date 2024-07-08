// -----------------------RootReducer.js-----------------------
import { combineReducers } from '@reduxjs/toolkit';

const initialProductsState = [];
const initialCartState = checkCart();

const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case 'product.load':
            return action.payload.products;
        case 'cart.add':
            return state.map(p => 
                p.id === action.payload.product.id 
                    ? { ...p, isBuying: true, color: 'green' } 
                    : p
            );
        case 'cart.remove':
            return state.map(p => 
                p.id === action.payload.product.id 
                    ? { ...p, isBuying: false, color: '' } 
                    : p
            );
        default:
            return state;
    }
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'cart.add':
            const newCart = [...state, action.payload.product];
            saveCart(newCart);
            return newCart;
        case 'cart.remove':
            const updatedCart = state.filter(p => p.id !== action.payload.product.id);
            saveCart(updatedCart);
            return updatedCart;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

function checkCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default rootReducer;
