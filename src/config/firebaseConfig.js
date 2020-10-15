import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1R_pI6Mwnxevr1-p8pv48S8HjybLtF5k",
  authDomain: "react-redux-firebase-cha-ac636.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-cha-ac636.firebaseio.com",
  projectId: "react-redux-firebase-cha-ac636",
  storageBucket: "react-redux-firebase-cha-ac636.appspot.com",
  messagingSenderId: "229146348097",
  appId: "1:229146348097:web:aa0d833250d52134fa14c0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export default firebase;
