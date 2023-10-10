import { APPLY_FILTER, ENABLE_LOADING, GET_PRODUCTS } from ".."
import {productsData} from "../../data"

export const getProducts = () => (dispatch) => {
    mockApiGetProduct(dispatch)
}

export const getProduct = (index) => (dispatch) => {
    dispatch({ type: ENABLE_LOADING })
    const product = productsData.filter(product => product.id === index)[0]
    dispatch({ type: "GET_PRODUCT", payload: product })
}

export const setFilter = (filterName="", filter) => (dispatch) => {
    const type = `SET_${getString(filterName)}_FILTER`
    dispatch({ type, payload: filter })
}
export const setSearchFilter = (filter = "") => (dispatch) => {
    const filterString = filter.trim().toLowerCase();
    dispatch({ type: "SET_SEARCH_FILTER", payload: filterString })
    mockApiGetProduct(dispatch)
    dispatch({ type: APPLY_FILTER })
} 
export const removeFilterByID = (filterName = "", filter) => (dispatch) => {
    const type = `REMOVE_${getString(filterName)}_FILTER`
    dispatch({ type, payload: filter })
}

export const applyFilter = () => (dispatch) => {
    mockApiGetProduct(dispatch)
    dispatch({type: APPLY_FILTER})
}

function mockApiGetProduct(dispatch) {
    dispatch({ type: ENABLE_LOADING })
    dispatch({ type: GET_PRODUCTS, payload: productsData })
}

function getString(filterName = "") {
    return filterName.toUpperCase().split(" ").join("_");
}