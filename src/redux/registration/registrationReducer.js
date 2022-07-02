import { ADD_USER, LOGIN, LOGOUT } from './registrationType';

const initialState = {
  users: [],
  status: false,
};
const registrationReducer = (state = initialState, action) => {
  //   let findUser;
  let tempUsers;
  switch (action.type) {
    case ADD_USER:
      tempUsers = state.users;
      tempUsers.push(action.payload.values);

      console.log(action.payload.values);
      return {
        ...state,
        users: tempUsers,
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
