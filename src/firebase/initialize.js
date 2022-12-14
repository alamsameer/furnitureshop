// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket:process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId:process.env.APPID,
  measurementId:process.env.MEASUREMENT_ID
};
console.log(process.env.REACT_APP_AUTH_DOMAIN);
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app