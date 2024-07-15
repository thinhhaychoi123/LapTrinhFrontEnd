// -----------------------RootReducer.js-----------------------
import { combineReducers } from '@reduxjs/toolkit';


//Phần khởi tạo giá trị state
const initialProductsState = [];
const initialCartState = checkCart();
const initialSelectCart = checkSelect();
const initialSelectCartBrought = checkCartBrought();
const initialSelectCheckout = checkCheckout();

//Phần reducer

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
const selectReducer = (state = initialSelectCart, action) => {
    switch (action.type) {
        case 'selectTour.select':
            const select = action.payload;
            saveSelector(select);
            return select;
          
        default:
            return state;
    }
};
const checkoutReducer = (state = initialSelectCheckout, action) => {
    switch (action.type) {
    case 'checkout.setcheckout':
            const CheckOut = {
                id: action.payload.id,
                tour: action.payload.tour,
                quantityAdult: action.payload.quantityAdult,
                quantityChild: action.payload.quantityChild,
                total_price: action.payload.total_price,
                payment_method: action.payload.payment_method,
                passenger_details: action.payload.passenger_details
            }
            saveCheckout(CheckOut);
            return CheckOut;
    case 'checkout.updatepassengerdetails'  :
        const updatedCheckOut = {
            ...state,
            passenger_details: action.payload.passenger_details
          };
          saveCheckout(updatedCheckOut); 
          return updatedCheckOut;
    case 'checkout.updatepaymenttype'  :
            const updatedCheckOut2 = {
                ...state,
                payment_method: action.payload.payment_method
              };
              saveCheckout(updatedCheckOut2); 
              return updatedCheckOut2;      
    default:
            return state;
    }
}

const cartBoughtReducer = (state = initialSelectCartBrought, action) => {
    switch (action.type) {
        case 'buycart.add':
            const newCart = [...state, action.payload.product];
            saveBoughtCart(newCart);
            return newCart;
        case 'buycart.remove':
            const updatedCart = state.filter(p => p.tour.id !== action.payload.product.id);
            saveBoughtCart(updatedCart);
            return updatedCart;
        default:    
            return state;
    }
};  

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    selectTour: selectReducer,
    checkout: checkoutReducer,
    boughtcart: cartBoughtReducer
});

//Phần lấy dữ liệu, từ tring localStorage chủ yếu

function checkCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function checkSelect(){
    const select = JSON.parse(localStorage.getItem('selectid'));
    if(!select){
        return '';
    }
    return select;
}
function checkCheckout(){
    const select = JSON.parse(localStorage.getItem('checkout'));
    if(!select){
        return '';
    }
    return select;
}
function checkCartBrought(){
    const cart = JSON.parse(localStorage.getItem('boughtcart'));
    if (!Array.isArray(cart)) {
        return [];
    }
    return cart
}

//Phần Save

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveSelector(id){
    localStorage.setItem('selectid', JSON.stringify(id));
}

function saveCheckout(data){
    localStorage.setItem('checkout', JSON.stringify(data));

}
function saveBoughtCart(cart){
    localStorage.setItem('boughtcart', JSON.stringify(cart));
}


export default rootReducer;
