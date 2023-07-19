// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTN0kZ20stMbvfAD-f4yaHa-5HMJ7_vZc",
  authDomain: "notez-obiz.firebaseapp.com",
  projectId: "notez-obiz",
  storageBucket: "notez-obiz.appspot.com",
  messagingSenderId: "1095088681442",
  appId: "1:1095088681442:web:1d3ffcebbb94de347009bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
