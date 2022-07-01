import { ADD_USER } from "./registrationType";

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
    // case LOGIN:
    default:
      return {
        ...state,
      };
  }
};
export default registrationReducer;
