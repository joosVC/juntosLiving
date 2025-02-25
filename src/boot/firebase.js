// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADrv-EWMI5pa1Go5294DXywX3u82pndFc",
  authDomain: "a4c-juntosliving.firebaseapp.com",
  projectId: "a4c-juntosliving",
  storageBucket: "a4c-juntosliving.firebasestorage.app",
  messagingSenderId: "890898797224",
  appId: "1:890898797224:web:3fe5b23706ecaf6b01289d",
  measurementId: "G-E7KKH1RQY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Set Firebase Auth persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error.message);
  });

export { app, analytics, auth, db };
