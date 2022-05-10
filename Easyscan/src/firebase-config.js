import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFm36qdRDF0S6qtAkQdqHlmXGBO6FQEzQ",
  authDomain: "budgetmart-f72ad.firebaseapp.com",
  projectId: "budgetmart-f72ad",
  storageBucket: "budgetmart-f72ad.appspot.com",
  messagingSenderId: "178303055549",
  appId: "1:178303055549:web:b16a04e8ada52bf4e7e9d4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
