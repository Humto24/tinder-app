import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1Mf1LDWyTVQmiJy9VOlK2txatwhDfqLg",
    authDomain: "tinder-clone-d0e51.firebaseapp.com",
    databaseURL: "https://tinder-clone-d0e51.firebaseio.com",
    projectId: "tinder-clone-d0e51",
    storageBucket: "tinder-clone-d0e51.appspot.com",
    messagingSenderId: "878320346784",
    appId: "1:878320346784:web:06efe71fffa41b5a560bc5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;