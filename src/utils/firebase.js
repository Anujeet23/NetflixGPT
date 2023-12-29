// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtamtV3LhtfXybh93eIimg6-RV6izHc70",
  authDomain: "newnetflixgpt.firebaseapp.com",
  projectId: "newnetflixgpt",
  storageBucket: "newnetflixgpt.appspot.com",
  messagingSenderId: "635928231600",
  appId: "1:635928231600:web:dbe591a5afc512debe4575",
  measurementId: "G-8MVZMZ1X3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();