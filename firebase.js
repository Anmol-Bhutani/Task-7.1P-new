// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClH3Na47j1auaRueeR7XqqQJJLuVHJdCM",
  authDomain: "dev-login-registration.firebaseapp.com",
  databaseURL: "https://dev-login-registration-default-rtdb.firebaseio.com",
  projectId: "dev-login-registration",
  storageBucket: "dev-login-registration.firebasestorage.app",
  messagingSenderId: "118647061044",
  appId: "1:118647061044:web:3f654862635556b1462861",
  measurementId: "G-Q1H156ENX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Authentication
const analytics = getAnalytics(app); // Initialize Analytics

// Helper functions for Authentication
const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

const logInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

// Export the services for use in your app
export { db, auth, analytics, signUpUser, logInUser };
