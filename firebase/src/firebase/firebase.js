// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import {getStorage}from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbbH-mFaPYM9aKWm1P6UZMGw_fmyPiZPY",
  authDomain: "fir-react-2191a.firebaseapp.com",
  projectId: "fir-react-2191a",
  storageBucket: "fir-react-2191a.appspot.com",
  messagingSenderId: "109215926485",
  appId: "1:109215926485:web:17501ebd57897b4fa97a5c",
  measurementId: "G-Y74ME51D4E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export const imageDb = getStorage(app);
