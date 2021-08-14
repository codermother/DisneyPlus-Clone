import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmXk6QHY7wiraDufu5ofbAW-7ckOJbTT8",
  authDomain: "disney-plus-clone-v1.firebaseapp.com",
  projectId: "disney-plus-clone-v1",
  storageBucket: "disney-plus-clone-v1.appspot.com",
  messagingSenderId: "489326383214",
  appId: "1:489326383214:web:c2551c7f8eedeec944d67f",
  measurementId: "G-TJ6K8T7PC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
