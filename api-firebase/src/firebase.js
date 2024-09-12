// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "api-firebase-70060.firebaseapp.com",
  projectId: "api-firebase-70060",
  storageBucket: "api-firebase-70060.appspot.com",
  messagingSenderId: "993702730955",
  appId: "1:993702730955:web:d3babcea83ed11ea2d8f4e",
  databaseURL: "https://api-firebase-70060-default-rtdb.firebaseio.com/", // Add database URL if missing
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize the database

// Export database
export { database };
