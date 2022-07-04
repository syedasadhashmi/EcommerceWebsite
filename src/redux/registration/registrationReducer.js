import { ADD_USER, LOGIN, LOGOUT } from "./registrationType";

const initialState = {
  users: [],
  regStatus: false,
  status: false,
};
const registrationReducer = (state = initialState, action) => {
  let tempUsers;
  switch (action.type) {
    case ADD_USER:
      tempUsers = state.users;
      tempUsers.push(action.payload.values);
      let xtemp = state.regStatus;
      xtemp = true;
      return {
        ...state,
        users: tempUsers,
        regStatus: xtemp,
      };
    case LOGIN:
      let newStatus = state.status;
      newStatus = true;
      return {
        ...state,
        status: newStatus,
      };
    case LOGOUT:
      let changeStatus = state.status;
      changeStatus = false;
      return {
        ...state,
        status: changeStatus,
      };
    default:
      return {
        ...state,
      };
  }
};
export default registrationReducer;
