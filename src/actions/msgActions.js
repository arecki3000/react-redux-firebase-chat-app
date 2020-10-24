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
      .collection("messages")
      .doc(message.currentChatId)
      .collection("message")
      .add({
        data: message.text.data,
        authorId: authorId,
        date: new Date()
      })
      .then((res) => {
        return firestore.collection("chats").doc(message.currentChatId).update({
          lastMsg: message.text.data
        });
      })
      .then(() => console.log("updated"))
      .then(() => {
        dispatch({
          type: ADD_MSG
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

export const setCurrentChat = (currentChat) => {
  return {
    type: SET_CURRENT_CHAT,
    currentChatId: currentChat.chatId,
    interlocutorId: currentChat.interlocutorId
  };
};

export const createNewChat = (newChat) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    console.log("new chat action");

    firestore
      .collection("chats")
      .doc(newChat.chatId)
      .set({
        users: [newChat.uid, newChat.interlocutorId],
        lastMsg: ""
      })
      .then(() => {
        dispatch({ type: CREATE_NEW_CHAT });
      })
      .catch((error) => {
        dispatch({ type: CREATE_NEW_CHAT_ERROR, error });
      });
  };
};
