import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAO0n9COOg4D59TUg1zTd4nmiKzKsHejWI",
    authDomain: "aldila-c3691.firebaseapp.com",
    projectId: "aldila-c3691",
    storageBucket: "aldila-c3691.firebasestorage.app",
    messagingSenderId: "816670922040",
    appId: "1:816670922040:web:223dc40fffe799949eddcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
