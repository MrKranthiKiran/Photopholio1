// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_sw0EqOdMmDbAAXFupGo10Dcl5qYL0o",
  authDomain: "portfolio1-e216b.firebaseapp.com",
  projectId: "portfolio1-e216b",
  storageBucket: "portfolio1-e216b.appspot.com",
  messagingSenderId: "16089697937",
  appId: "1:16089697937:web:ac96ff114f198a568f3930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);