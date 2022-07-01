import { ADD_USER, LOGIN } from "./registrationType";
export const addUser = (values) => {
  return {
    type: ADD_USER,
    payload: values,
  };
};
export const loginFunc = (status) => {
  return {
    type: LOGIN,
    payload: status,
  };
};
