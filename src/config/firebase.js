// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movie-app-64a85.firebaseapp.com",
  projectId: "movie-app-64a85",
  storageBucket: "movie-app-64a85.appspot.com",
  messagingSenderId: "721868076551",
  appId: "1:721868076551:web:95befee9f1d5a35a091ca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
