import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZXXaxOKwl5OOQ36tS5_kUmkMnlGWcIxA",
  authDomain: "cafeteriadarnauchans.firebaseapp.com",
  projectId: "cafeteriadarnauchans",
  storageBucket: "cafeteriadarnauchans.appspot.com",
  messagingSenderId: "473566982872",
  appId: "1:473566982872:web:01d8e28d719a9927cf1dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
