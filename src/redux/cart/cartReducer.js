const initialState = {
  cart: [],
  // totalPrice: 0,
  // totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  // const { items } = action.payload;
  // console.log(items);
  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log(action.payload.items);
      // const tprice = state.totalPrice + action.payload.items.price;
      // console.log(tprice);
      console.log(state);

      return {
        ...state,
        cart: [action.payload.items],
        // totalPrice: tprice,
      };

    default:
      return {
        state,
      };
  }
};
export default cartReducer;
