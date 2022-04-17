// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKUxi3QXXJiU8FDmQW_7kn-eKz1C7j6Lw",
  authDomain: "dentist-portfolio.firebaseapp.com",
  projectId: "dentist-portfolio",
  storageBucket: "dentist-portfolio.appspot.com",
  messagingSenderId: "867891363827",
  appId: "1:867891363827:web:401acdda7f1797474e9c86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
