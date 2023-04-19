// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// import { analytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtvxvWAsvZRs9di9IeD5nW3x1P_3qQ-gA",
    authDomain: "fir-d35b5.firebaseapp.com",
    projectId: "fir-d35b5",
    storageBucket: "fir-d35b5.appspot.com",
    messagingSenderId: "760947461900",
    appId: "1:760947461900:web:55f9c768cc8fe0661a0329",
    measurementId: "G-0XTFD5G99H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app)