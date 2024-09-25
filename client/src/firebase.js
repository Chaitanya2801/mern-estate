// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-96bb8.firebaseapp.com",
  projectId: "mern-estate-96bb8",
  storageBucket: "mern-estate-96bb8.appspot.com",
  messagingSenderId: "91676699533",
  appId: "1:91676699533:web:207da149c5e6584d1cabc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
