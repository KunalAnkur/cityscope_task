const initialState = {
    products: []
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "REMOVE_PRODUCT_TO_CART":
            const updatedProduct = state.products.filter(product => product.id !== action.payload)
            return {
                ...state,
                products: updatedProduct
            }
        default:
            return state;
    }
}

export {cartReducer}