import { ADD_TO_CART, INCREMENT, DECREMENT, DELETE } from "./cartTypes";
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  // const { items } = action.payload;
  // console.log(items);
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

      // const tprice = initialState.totalPrice + action.payload.items.price;
      // console.log(tprice);

      return {
        ...state,
        cart: tempCart,
        totalPrice: tPrice,
        totalQuantity: tQuantity,
      };
    case INCREMENT:
      // console.log(action.payload.record.id);
      // console.log(initialState.cart);
      // initialState.cart.map((cartItems) => {
      //   if (cartItems.id === action.payload.record.id) {
      //     console.log(`${cartItems.id}`);
      //     console.log(action.payload.record.quantity + 1);
      //   } else {
      //     console.log("not in cart");
      //   }
      // });

      findPro = state.cart.find(
        (items) => items.id === action.payload.record.id
      );
      // console.log(findPro);
      index = state.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );
      console.log(findPro.stock);
      if (findPro.quantity < findPro.stock) {
        findPro.quantity += 1;
        state.totalQuantity = findPro.quantity;
        // initialState.totalQuantity += 1;
        tQ = state.totalQuantity;
        tPrice = findPro.price * findPro.quantity;
        findPro.price = tPrice;
        state.cart[index] = findPro;
        // console.log(findPro);
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
      // console.log(findPro.quantity > 0);
      index = state.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );

      // console.log(index);
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.totalQuantity = findPro.quantity;
        // initialState.totalQuantity += 1;
        tQ = state.totalQuantity;
        tPrice = findPro.price / findPro.quantity;
        findPro.price = tPrice;
        state.cart[index] = findPro;
        // findPro.quantity -= 1;
        // initialState.totalQuantity = findPro.quantity;
        // mPrice = findPro.price / findPro.quantity;

        // console.log(findPro.price);
        // console.log(findPro.quantity);
        // console.log(mPrice);
        // console.log(initialState.cart[index].totalQuantity);
        // console.log(tPrice);

        // findPro.price = mPrice;
        // initialState.cart[index] = findPro;
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
