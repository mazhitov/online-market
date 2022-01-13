import {combineReducers, createStore} from "redux";
import productsReducer from "./products-reducer";


let reducers = combineReducers({
    products: productsReducer,
});
const initialState = {};
let store = createStore(reducers, initialState);

export default store;