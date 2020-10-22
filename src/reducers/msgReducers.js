import {
  ADD_MSG,
  ADD_MSG_ERROR,
  SET_CURRENT_CHAT
} from "../constants/actionConstants";

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
    case SET_CURRENT_CHAT: {
      console.log("setting current chat");
      return {
        ...state,
        chatId: action.chatId
      };
    }
    default:
      return state;
  }
};
