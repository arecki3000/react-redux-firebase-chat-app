import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR
} from "../constants/actionConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN: {
      console.log("sign in success");
      return state;
    }
    case SIGN_IN_ERROR: {
      console.log("sign in error");
      return state;
    }
    case SIGN_UP: {
      console.log("sign up success");
      return state;
    }
    case SIGN_UP_ERROR: {
      console.log("sign up error");
      return state;
    }
    case SIGN_OUT: {
      console.log("sign out success");
      return state;
    }
    case SIGN_OUT_ERROR: {
      console.log("sign ut error");
      return state;
    }
    default:
      return state;
  }
};
