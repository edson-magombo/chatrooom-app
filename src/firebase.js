import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3iMheWSZgOdRGQQ8H7FIfW8fVcVjMfB0",
    authDomain: "chat-room-1e47a.firebaseapp.com",
    projectId: "chat-room-1e47a",
    storageBucket: "chat-room-1e47a.appspot.com",
    messagingSenderId: "550675834242",
    appId: "1:550675834242:web:a32e56d5cba686aeafdb9b",
    measurementId: "G-TS35B0MX7Y"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;  