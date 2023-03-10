import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYjvUTjLizHTU0HrRcsFoPIGEf9u0oYTY",
  authDomain: "firstproject-7dd54.firebaseapp.com",
  projectId: "firstproject-7dd54",
  storageBucket: "firstproject-7dd54.appspot.com",
  messagingSenderId: "780568766881",
  appId: "1:780568766881:web:ebd0a8c6c3e834ad4dc3e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const Google = new GoogleAuthProvider()
export const Facebook = new FacebookAuthProvider()
export const dataBase = getFirestore(app)