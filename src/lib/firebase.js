import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMMGR8ghsWbQHbZWxwi8U10h2Ax166-L8",
  authDomain: "hc24-4f0da.firebaseapp.com",
  projectId: "hc24-4f0da",
  storageBucket: "hc24-4f0da.firebasestorage.app",
  messagingSenderId: "110233103859",
  appId: "1:110233103859:web:9c10f8ad94d2db17603686"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
