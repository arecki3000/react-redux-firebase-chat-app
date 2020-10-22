import {
  ADD_MSG,
  ADD_MSG_ERROR,
  SET_CURRENT_CHAT,
  CREATE_NEW_CHAT,
  CREATE_NEW_CHAT_ERROR
} from "../constants/actionConstants";

export const sendMessage = (message) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("msg")
      .add({
        ...message,
        authorId: authorId,
        date: new Date()
      })
      .then(() => {
        dispatch({
          type: ADD_MSG,
          message
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_MSG_ERROR,
          error
        });
      });
  };
};

export const setCurrentChat = (chatId) => {
  return {
    type: SET_CURRENT_CHAT,
    chatId
  };
};

export const createNewChat = (chatId, user1Id, user2Id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("chats")
      .doc(chatId)
      .set({
        users: [user1Id, user2Id],
        lastMsg: ""
      })
      .then(() => {
        dispatch({
          type: CREATE_NEW_CHAT
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_NEW_CHAT_ERROR,
          error
        });
      });
  };
};
