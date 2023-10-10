import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { cartReducer, productReducer} from "./reducers"

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer
});


const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
)

export { store }