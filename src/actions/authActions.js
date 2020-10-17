import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR
} from "../constants/actionConstants";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGN_IN });
      })
      .catch((error) => {
        dispatch({ type: SIGN_IN_ERROR }, error);
      });
  };
};

export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase;

    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGN_UP });
      })
      .catch((error) => {
        dispatch({ type: SIGN_UP_ERROR }, error);
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase;

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT });
      })
      .catch((error) => {
        dispatch({ type: SIGN_OUT_ERROR }, error);
      });
  };
};
