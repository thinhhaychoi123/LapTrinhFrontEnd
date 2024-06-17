// -----------------isAction.js-----------------
export const loadProducts = (data) => {
    return {
        type: 'product.load',
        payload: {
            products: data
        }
    }
}
export const addCartProducts = (data) => {
    return {
        type: 'cart.add',
        payload: {
            products: data
        }
    }
}
// --------------------------