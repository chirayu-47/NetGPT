// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu_qoROVirgwcali0Y34d6AJvGUMwOwhU",
  authDomain: "netgpt-e9ae2.firebaseapp.com",
  projectId: "netgpt-e9ae2",
  storageBucket: "netgpt-e9ae2.appspot.com",
  messagingSenderId: "144284469473",
  appId: "1:144284469473:web:c4efd42aa1cc7f19b3cfa0",
  measurementId: "G-ZK2EGS39NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
