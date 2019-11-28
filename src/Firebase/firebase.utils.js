import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyAOGkL1NVYDZAyF6T8tAqPznsS4l3BEP8I",
    authDomain: "crown-db-e4318.firebaseapp.com",
    databaseURL: "https://crown-db-e4318.firebaseio.com",
    projectId: "crown-db-e4318",
    storageBucket: "crown-db-e4318.appspot.com",
    messagingSenderId: "152991440119",
    appId: "1:152991440119:web:03e8a43de3c7a5054f87f2",
    measurementId: "G-2EBZP5LB97"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;