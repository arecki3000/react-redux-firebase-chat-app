import { ADD_MSG, ADD_MSG_ERROR } from "../constants/actionConstants";

export const msgReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MSG: {
      console.log("added message");
      return state;
    }
    case ADD_MSG_ERROR: {
      console.log("message error");
      return state;
    }
    default:
      return state;
  }
};
