import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/storage";

//Inladen firebase database
const firebaseConfig = {
    apiKey: "AIzaSyDo0dC4Y3gYf1bq6TqvtpxnyCuyffZ5R5Q",
    authDomain: "carnext-44b47.firebaseapp.com",
    projectId: "carnext-44b47",
    storageBucket: "carnext-44b47.appspot.com",
    messagingSenderId: "939294766748",
    appId: "1:939294766748:web:35ba11a54a05b1ecc25f59"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
