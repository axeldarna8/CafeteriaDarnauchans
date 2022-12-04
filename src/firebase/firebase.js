import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZXXaxOKwl5OOQ36tS5_kUmkMnlGWcIxA",
  authDomain: "cafeteriadarnauchans.firebaseapp.com",
  projectId: "cafeteriadarnauchans",
  storageBucket: "cafeteriadarnauchans.appspot.com",
  messagingSenderId: "473566982872",
  appId: "1:473566982872:web:9b634ff1e41e3558cf1dad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);