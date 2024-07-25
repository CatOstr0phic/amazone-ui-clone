import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2WyoIUuzr-oawN4Q7Ch_VWrVac3U3isQ",
    authDomain: "react-project-9957c.firebaseapp.com",
    projectId: "react-project-9957c",
    storageBucket: "react-project-9957c.appspot.com",
    messagingSenderId: "857006351918",
    appId: "1:857006351918:web:7c02d31ecf11fef2ac61bf",
    measurementId: "G-2V0ZSE038P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 