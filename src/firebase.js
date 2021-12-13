import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
      // paste your firebase app config
  })
  .auth();
