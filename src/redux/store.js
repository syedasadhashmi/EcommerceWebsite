import { createStore, combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
