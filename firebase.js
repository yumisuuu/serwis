// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCko-H-P5WdD8u-9JN_h_euea1aHQnUzv8",
  authDomain: "serwiskomlab-80aeb.firebaseapp.com",
  projectId: "serwiskomlab-80aeb",
  storageBucket: "serwiskomlab-80aeb.firebasestorage.app",
  messagingSenderId: "670378709941",
  appId: "1:670378709941:web:5f55cd043bad072c483ffc",
  measurementId: "G-YK88ET8W97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
