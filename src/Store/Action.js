// -----------------isAction.js-----------------
export const loadProducts = (data) => ({
    type: 'product.load',
    payload: { products: data }
});

export const addCartProducts = (data) => ({
    type: 'cart.add',
    payload: { products: data }
});

// --------------------------