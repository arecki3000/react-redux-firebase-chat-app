import {
  ADD_MSG,
  ADD_MSG_ERROR,
  SET_CURRENT_CHAT,
  CREATE_NEW_CHAT,
  CREATE_NEW_CHAT_ERROR
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
        currentChatId: action.currentChatId,
        interlocutorId: action.interlocutorId
      };
    }

    case CREATE_NEW_CHAT: {
      console.log("creating new chat");
      return state;
    }
    case CREATE_NEW_CHAT_ERROR: {
      console.log("new chat error");
      return state;
    }
    default:
      return state;
  }
};
