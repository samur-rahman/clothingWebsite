import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAga1Ot8tXlFM2LM4-sY5y9mYCUotNgc08",
  authDomain: "crwn-clothing-db-60219.firebaseapp.com",
  projectId: "crwn-clothing-db-60219",
  storageBucket: "crwn-clothing-db-60219.appspot.com",
  messagingSenderId: "385733579767",
  appId: "1:385733579767:web:e7fe978349cbb7eb8754f2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// set up for database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // see some data or get data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // if the data exists if not create one for me
  console.log(userSnapshot.exists());

  // check if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data doesn't exist create / set the doc with the data from userAuth in my collection

  // return userDocRef
  return userDocRef;
};
