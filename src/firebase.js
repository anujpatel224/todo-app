import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig  = {
    apiKey: "AIzaSyCT6gjLq70lXGvSBxD1Lw0z0lyU1Wf_j2U",
    authDomain: "todo-app-fc1e9.firebaseapp.com",
    projectId: "todo-app-fc1e9",
    storageBucket: "todo-app-fc1e9.appspot.com",
    messagingSenderId: "307562553482",
    appId: "1:307562553482:web:755ac40ac539511fb0cd73",
    measurementId: "G-R1HV57MRSM"
};


const App = initializeApp(firebaseConfig);
export const db = getFirestore(App);
