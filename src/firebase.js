import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBszWCyF5zJc8ELO5-Nx7mmQG_d2BqULkY",
    authDomain: "instagram-post-login.firebaseapp.com",
    databaseURL: "https://instagram-post-login.firebaseio.com",
    projectId: "instagram-post-login",
    storageBucket: "instagram-post-login.appspot.com",
    messagingSenderId: "465015470830",
    appId: "1:465015470830:web:e10779d8144dd2a81311ff",
    measurementId: "G-G1LBHEPDEM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
