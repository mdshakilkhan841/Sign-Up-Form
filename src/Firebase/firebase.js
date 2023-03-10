import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAf7FfZQFduv3AlJ1XUQ_lMbywaozi_PIo",
    authDomain: "sign-up-form-dbf9c.firebaseapp.com",
    projectId: "sign-up-form-dbf9c",
    storageBucket: "sign-up-form-dbf9c.appspot.com",
    messagingSenderId: "202887172565",
    appId: "1:202887172565:web:57db09c5ade31c19ccad5c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const formRef = collection(db, 'Form Data')

export { storage, formRef };