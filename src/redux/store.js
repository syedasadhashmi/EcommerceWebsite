import { createStore, combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import registrationReducer from "./registration/registrationReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
  registrationReducer: registrationReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
