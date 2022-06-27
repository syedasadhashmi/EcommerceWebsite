const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  // const { items } = action.payload;
  // console.log(items);
  switch (action.type) {
    case "ADD_TO_CART":
      const tempCart = initialState.cart;
      tempCart.push(action.payload.items);
      const tprice = initialState.totalPrice + action.payload.items.price;
      console.log(tprice);

      return {
        ...initialState,
        cart: tempCart,
        totalPrice: tprice,
      };
    //   console.log(action.payload.items);
    // const tprice = state.totalPrice + action.payload.items.price;
    // console.log(tprice);
    // console.log(state);
    // console.log(state.cart.push(...state, action.payload.items));
    // return {
    // ...state,
    // cart: [...state.cart, action.payload.items],
    // cart: state.cart.push(action.payload.items),
    // cart: [...state.cart, action.payload.items],

    // totalPrice: tprice,
    // };

    default:
      return {
        state,
      };
  }
};
export default cartReducer;
