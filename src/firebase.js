import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsr-lYfgCMx_5wT1BUoCb0ALcCiznYqm4",
    authDomain: "chat-app-7a2c2.firebaseapp.com",
    projectId: "chat-app-7a2c2",
    storageBucket: "chat-app-7a2c2.appspot.com",
    messagingSenderId: "305809850026",
    appId: "1:305809850026:web:cdf3a0552f2ae62aec1ad3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); // access to db form any other file

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };

//   export default db;

//   import { auth, provider  } from './firebase';
//   import db from './firebase';