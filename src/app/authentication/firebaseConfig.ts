import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPzboGBtJJPiuXQj9MyoFSO7H6U7aOARw",
  authDomain: "finance-angular-8ef80.firebaseapp.com",
  projectId: "finance-angular-8ef80",
  storageBucket: "finance-angular-8ef80.appspot.com",
  messagingSenderId: "73934019639",
  appId: "1:73934019639:web:b5875eaaa4349124b4b3b2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
