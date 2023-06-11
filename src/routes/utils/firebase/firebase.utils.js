import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

// Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyD-nAdNfJB3EGLnCE2ZExTbcT2vTv481CE",
    authDomain: "react-project-77897.firebaseapp.com",
    projectId: "react-project-77897",
    storageBucket: "react-project-77897.appspot.com",
    messagingSenderId: "326281614893",
    appId: "1:326281614893:web:3affd38afea0e48ad1caa4",
    measurementId: "G-H2PGX3QT6T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Authentication Setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore Setup
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); //benzersiz bir bağlantı noktası
    const userSnapShot = await getDoc(userDocRef); // veri setine erişim

    // Users veritabanı yok ise
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("kullancıyı kaydetmede hata:", error.message);
        }
    }

    //Benzersiz bağlantıyı döndürme
    return userDocRef;
}

// Email/Password Sign Up
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}
