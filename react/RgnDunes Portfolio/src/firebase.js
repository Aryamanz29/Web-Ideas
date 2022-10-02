import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUGHl5oqjku-Ek6RxPYF3sgBtQupFRnmE",
  authDomain: "rgndunes-v3.firebaseapp.com",
  projectId: "rgndunes-v3",
  storageBucket: "rgndunes-v3.appspot.com",
  messagingSenderId: "424290686718",
  appId: "1:424290686718:web:b49183018b33e8493377af",
  measurementId: "G-6H3MBPRPR6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { db, auth, provider };
