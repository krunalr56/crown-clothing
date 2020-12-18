import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase-auth';

var config = {
    apiKey: "AIzaSyAh0FhaiQPy0KFB0mQBxjM6E3WzmD38m_w",
    authDomain: "crown-db-a73e7.firebaseapp.com",
    projectId: "crown-db-a73e7",
    storageBucket: "crown-db-a73e7.appspot.com",
    messagingSenderId: "500581255524",
    appId: "1:500581255524:web:71653bb72089908c95d271",
    measurementId: "G-YZSSRYTH4X"
  }

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;