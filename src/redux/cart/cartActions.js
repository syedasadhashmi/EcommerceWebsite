import { ADD_TO_CART, INCREMENT, DECREMENT } from "./cartTypes";

export const addToCart = (items) => {
  return {
    type: ADD_TO_CART,
    payload: items,
  };
};
export const increment = (record) => {
  return {
    type: INCREMENT,
    payload: record,
  };
};
export const decrement = (record) => {
  return {
    type: DECREMENT,
    payload: record,
  };
};
