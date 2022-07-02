import { ADD_USER, LOGIN, LOGOUT } from './registrationType';
export const addUser = (values) => {
  return {
    type: ADD_USER,
    payload: values,
  };
};
export const loginFunc = () => {
  return {
    type: LOGIN,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
