import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa8IXq0SUBzZDqXIGiE119r5B245wXgdo",
  authDomain: "house-marketplace-app-9509f.firebaseapp.com",
  projectId: "house-marketplace-app-9509f",
  storageBucket: "house-marketplace-app-9509f.appspot.com",
  messagingSenderId: "846862296933",
  appId: "1:846862296933:web:ff5731e809f3a3c825638c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
