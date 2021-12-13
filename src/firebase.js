import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    //insert your app config
  })
  .auth();
