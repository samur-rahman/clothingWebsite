import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);