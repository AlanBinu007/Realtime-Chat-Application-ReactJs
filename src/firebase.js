import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCQHUgGu9zJ30hWQlohpRq1pEdtTqsbR4c",
    authDomain: "chat-app-c0be6.firebaseapp.com",
    projectId: "chat-app-c0be6",
    storageBucket: "chat-app-c0be6.appspot.com",
    messagingSenderId: "580901724938",
    appId: "1:580901724938:web:0bf01fe2e8b699db3ed0f3",
  })
  .auth();
