import {useSelector} from "react-redux";
// CartInfo.js
export function CartInfo(){
    const cart = useSelector(state => state.cart);
    return (<p>Số Sản phẩm trong giở hàng: {cart.length}</p>);
}