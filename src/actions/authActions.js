export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOG_IN" });
      })
      .catch((err) => {
        dispatch({ type: "LOG_IN_ERROR", err });
      });
  };
};

export const signUp = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .createUserInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_OUT_ERROR", err });
      });
  };
};
