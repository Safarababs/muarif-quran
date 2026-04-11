// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0AOrw4zp9u64tCdP3dShQWPcdBfZXF_c",
  authDomain: "al-hujjat.firebaseapp.com",
  databaseURL: "https://al-hujjat-default-rtdb.firebaseio.com",
  projectId: "al-hujjat",
  storageBucket: "al-hujjat.firebasestorage.app",
  messagingSenderId: "111985590614",
  appId: "1:111985590614:web:de397c7726c2ce53ac16f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
