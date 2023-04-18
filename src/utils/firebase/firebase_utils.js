import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB79hWYlzkpU-oodGFwPbtDPxH-PQf2Zls",
  authDomain: "e-commerce-9bc68.firebaseapp.com",
  projectId: "e-commerce-9bc68",
  storageBucket: "e-commerce-9bc68.appspot.com",
  messagingSenderId: "496806122755",
  appId: "1:496806122755:web:6258b7e1b3fbaec2e3c536",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const firebaseAuth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () =>
  signInWithPopup(firebaseAuth, provider);

export const createUserDocumentFromAuth = async (
  userAuthObject,
  additionalInformation = {}
) => {
  if (!userAuthObject) return;

  const userDocRef = doc(db, "users", userAuthObject.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuthObject;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log(`setDoc problem ${err.message}`);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const signInAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};
