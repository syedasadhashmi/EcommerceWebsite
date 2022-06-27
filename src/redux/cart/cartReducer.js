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
  switch (action.type) {
    case 'ADD_TO_CART':
      const tempCart = initialState.cart;
      tempCart.push(action.payload.items);
      const tprice = initialState.totalPrice + action.payload.items.price;
      console.log(tprice);

      return {
        ...initialState,
        cart: tempCart,
        totalPrice: tprice,
      };
    case 'INC':
      findPro = initialState.cart.find((items) => items.id === action.payload);
      index = initialState.cart.findIndex(
        (items) => items.id === action.payload
      );
      findPro.totalQuantity += 1;
      initialState.cart[index] = findPro;
      return {
        ...initialState,
        totalPrice: initialState.totalPrice,
        totalQuantity: initialState.totalQuantity + 1,
      };

    default:
      return {
        state,
      };
  }
};
export default cartReducer;
