// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXesZ4R4T_caaladtAU5rb28cBcSEOnRk",
  authDomain: "loginproject-4f162.firebaseapp.com",
  projectId: "loginproject-4f162",
  storageBucket: "loginproject-4f162.appspot.com",
  messagingSenderId: "294461363514",
  appId: "1:294461363514:web:ebc3919877f0c030bbac03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;