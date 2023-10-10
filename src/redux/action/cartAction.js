
export const addToCart = (product) => (dispatch) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product })
}

export const removeToCart = (id) => (dispatch) => {
    dispatch({ type: "REMOVE_PRODUCT_TO_CART", payload: id })
}
