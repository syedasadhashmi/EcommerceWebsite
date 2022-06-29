import { ADD_TO_CART, INCREMENT, DECREMENT } from './cartTypes';
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
  let mPrice;
  let tQ;
  switch (action.type) {
    case ADD_TO_CART:
      const tempCart = initialState.cart;
      tempCart.push(action.payload.items);

      findPro = initialState.cart.find(
        (items) => items.id === action.payload.items.id
      );
      index = initialState.cart.findIndex(
        (items) => items.id === action.payload.items.id
      );
      const tQuantity = findPro.quantity;
      console.log(tQuantity);
      tPrice = findPro.price;
      console.log(tPrice);

      // const tprice = initialState.totalPrice + action.payload.items.price;
      // console.log(tprice);

      return {
        ...initialState,
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

      findPro = initialState.cart.find(
        (items) => items.id === action.payload.record.id
      );
      // console.log(findPro);
      index = initialState.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );
      // const a = findPro.price;

      // console.log(a);
      // const singleAmount = a;
      // console.log(singleAmount);
      // console.log(findPro.price);
      // console.log(index);
      findPro.quantity += 1;
      // initialState.totalQuantity = findPro.quantity;
      initialState.totalQuantity += 1;
      tQ = initialState.totalQuantity;
      tPrice = findPro.price * initialState.totalQuantity;
      findPro.price = tPrice;
      initialState.cart[index] = findPro;
      // console.log(findPro);

      return {
        ...initialState,
        totalPrice: tPrice,
        totalQuantity: tQ,
      };
    case DECREMENT:
      findPro = initialState.cart.find(
        (items) => items.id === action.payload.record.id
      );
      // console.log(findPro.quantity > 0);
      index = initialState.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );

      // console.log(index);
      findPro.quantity -= 1;
      initialState.totalQuantity = findPro.quantity;

      mPrice = findPro.price / findPro.quantity;

      // console.log(findPro.price);
      // console.log(findPro.quantity);
      // console.log(mPrice);
      // console.log(initialState.cart[index].totalQuantity);
      // console.log(tPrice);
      findPro.price = mPrice;
      initialState.cart[index] = findPro;
      // console.log(findPro);

      return {
        ...initialState,
        totalPrice: mPrice,
        // totalQuantity: initialState.totalQuantity - 1,
      };
    case 'DELETE':
      index = initialState.cart.findIndex(
        (items) => items.id === action.payload.record.id
      );
      // console.log(index);
      initialState.cart.filter((i) => {
        if (index) {
          console.log(i);
        } else {
          console.log('nnot exist');
        }
      });

      // return {
      //   cart: temp,
      // };
      break;

    default:
      return {
        ...initialState,
      };
  }
};
export default cartReducer;
