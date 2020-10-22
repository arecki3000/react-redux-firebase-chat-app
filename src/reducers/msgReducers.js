import {
  ADD_MSG,
  ADD_MSG_ERROR,
  GET_INTERLOCUTOR_ID
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
    case GET_INTERLOCUTOR_ID: {
      console.log("setting current chat");
      return {
        ...state,
        interlocutorId: action.chatId
      };
    }
    default:
      return state;
  }
};
