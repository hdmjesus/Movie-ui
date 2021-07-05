import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCCgFeuzVnQowbF5-YAUvV39k6mzmDck4A",
    authDomain: "movie-ui-bcf0f.firebaseapp.com",
    projectId: "movie-ui-bcf0f",
    storageBucket: "movie-ui-bcf0f.appspot.com",
    messagingSenderId: "879150023445",
    appId: "1:879150023445:web:8a0046974a3e17ccea9f1c",
    measurementId: "G-8CM9WZRJT6"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
