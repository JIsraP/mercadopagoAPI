// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FB_API_KEY, FB_APP_ID, FB_AUTH_DOMAIN, FB_MESSAGING_SENDER_ID, FB_PROJECT_ID, FB_STORAGE_BUCKET } from "../config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);