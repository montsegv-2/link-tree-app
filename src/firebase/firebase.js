
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL, 
    getBytes,
} from 'firebase/storage';
import {
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    setDoc, 
    deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAB4DhDlVy6S71foVDhpAifPdsAzGNbglw",
  authDomain: "treelink-tutorial-18fb9.firebaseapp.com",
  projectId: "treelink-tutorial-18fb9",
  storageBucket: "treelink-tutorial-18fb9.appspot.com",
  messagingSenderId: "973653403939",
  appId: "1:973653403939:web:4957ff4fe5c9231e76c496"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);