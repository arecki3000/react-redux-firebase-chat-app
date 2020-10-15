const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      console.log("sign in succes");
      return state;
    }
    case "SIGN_IN_ERROR": {
      console.log("sign in error");
      return state;
    }
    case "SIGN_OUT": {
      console.log("sign out succes");
      return state;
    }
    case "SIGN_OUT_ERROR": {
      console.log("sign out error");
      return state;
    }
    case "SIGN_UP": {
      console.log("sign up succes");
      return state;
    }
    case "SIGN_UP_ERROR": {
      console.log("sign up error");
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
