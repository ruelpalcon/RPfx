// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiyTxPvkH-Pafr1vg-tVEbI7adKWWSmnA",
  authDomain: "rpfx-trading.firebaseapp.com",
  projectId: "rpfx-trading",
  storageBucket: "rpfx-trading.firebasestorage.app",
  messagingSenderId: "1018093031159",
  appId: "1:1018093031159:web:02309e1537adb65e664df2",
  measurementId: "G-Y1Q14V72TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);