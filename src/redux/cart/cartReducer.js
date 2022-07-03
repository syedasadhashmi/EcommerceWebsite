import { ADD_TO_CART, INCREMENT, DECREMENT, DELETE } from './cartTypes';
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  realData: [],
};

const cartReducer = (state = initialState, action) => {
  let index;
  let findPro;
  let tPrice;
  let tQ;
  switch (action.type) {
    case ADD_TO_CART:
      const tempCart = state.cart;
      tempCart.push(action.payload.items);
      findPro = state.cart.find(
        (items) => items.id === action.payload.items.id
      );
      index = state.cart.findIndex(
        (items) => items.id === action.payload.items.id
      );
      const tQuantity = findPro.quantity;
      console.log(tQuantity);
      tPrice = findPro.price;
      console.log(tPrice);
      return {
        ...state,
        cart: tempCart,
        totalPrice: tPrice,
        totalQuantity: tQuantity,
      };
    case INCREMENT:
      findPro = state.cart.find(
        (items) => items.id === action.payload.record.id
      );
      index = state.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );
      console.log(findPro.stock);
      if (findPro.quantity < findPro.stock) {
        let xtra = findPro.price / findPro.quantity;
        findPro.quantity += 1;
        state.totalQuantity = findPro.quantity;
        tQ = state.totalQuantity;
        tPrice = xtra * findPro.quantity;
        findPro.price = tPrice;
        state.cart[index] = findPro;
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        totalPrice: tPrice,
        totalQuantity: tQ,
      };
    case DECREMENT:
      findPro = state.cart.find(
        (items) => items.id === action.payload.record.id
      );
      index = state.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );
      if (findPro.quantity > 1) {
        console.log(findPro.price);
        console.log(findPro.quantity);
        let xtra2 = findPro.price / findPro.quantity;
        console.log(xtra2);
        findPro.quantity -= 1;
        state.totalQuantity = findPro.quantity;
        tQ = state.totalQuantity;
        tPrice = findPro.price - xtra2;
        findPro.price = tPrice;
        state.cart[index] = findPro;
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        totalPrice: tPrice,
        totalQuantity: tQ,
      };
    case DELETE:
      const temp = state.cart.filter(
        (items) => items.id !== action.payload.record.id
      );
      return {
        ...state,
        cart: temp,
        totalPrice: 0,
        totalQuantity: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;
