import { createStore, combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import registrationReducer from "./registration/registrationReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const root = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
  registrationReducer: registrationReducer,
});
const persistedReducer = persistReducer(persistConfig, root);
const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
export default store;
