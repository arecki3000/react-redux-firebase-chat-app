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
      return state;
    }
    case SIGN_UP: {
      return state;
    }
    case SIGN_UP_ERROR: {
      return state;
    }
    case SIGN_OUT: {
      return state;
    }
    case SIGN_OUT_ERROR: {
      return state;
    }
    default:
      return state;
  }
};
