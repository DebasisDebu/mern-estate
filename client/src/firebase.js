// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "major-practice-ad798.firebaseapp.com",
  projectId: "major-practice-ad798",
  storageBucket: "major-practice-ad798.appspot.com",
  messagingSenderId: "1099288168051",
  appId: "1:1099288168051:web:6c374c5f5aaeff8ecdcc06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);