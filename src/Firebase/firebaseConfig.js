// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgXrC2Oig9PcCu-GHqyhZy9PLytq79fg",
  authDomain: "eco-hogar-ed27a.firebaseapp.com",
  projectId: "eco-hogar-ed27a",
  storageBucket: "eco-hogar-ed27a.firebasestorage.app",
  messagingSenderId: "502776432336",
  appId: "1:502776432336:web:09d6e9a19dc942cdb840d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);