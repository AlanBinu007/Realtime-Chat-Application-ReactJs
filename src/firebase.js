import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAWxnWdUdB7q5Oa3YuyZEAL0Kr2HVvwgH8",
    authDomain: "alanbinu-mychat.firebaseapp.com",
    projectId: "alanbinu-mychat",
    storageBucket: "alanbinu-mychat.appspot.com",
    messagingSenderId: "652955793895",
    appId: "1:652955793895:web:5b7e8e8d04c5dd2646a542",
    measurementId: "G-CZ88D7MT78"
  })
  .auth();
