import { response } from "express";
import { LOGIN_STATUS, USER_TYPE, ACTIONS } from "./constants";

export const initialState = {
  username: '',
  loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
  usertype: '',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOG_IN:
        console.log(action);
      return {
        ...state,
        username : response.username,
        loginStatus : LOGIN_STATUS.IS_LOGGED_IN,
        usertype : response.usertype === USER_TYPE.ADMIN ? USER_TYPE.ADMIN : USER_TYPE.USER

      };
    case ACTIONS.LOG_OUT:
      return {
        ...state,
      };

    default:
      throw new Error(`Error`); // reporting detail for debugging aid, not shown to user
  }
}

export default reducer;
