// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Bdht0fF9Ap7mZyC3zfwiv9iDvsetPKo",
  authDomain: "imtihon-73af5.firebaseapp.com",
  projectId: "imtihon-73af5",
  storageBucket: "imtihon-73af5.appspot.com",
  messagingSenderId: "761292310004",
  appId: "1:761292310004:web:9428a2967fed1f5e0465a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export { auth, googleProvider };
