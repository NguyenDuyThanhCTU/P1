import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnJ5DTCvZI-AohQozlmh_XL_-9R4d4lNg",
  authDomain: "generalivn-2ce8c.firebaseapp.com",
  projectId: "generalivn-2ce8c",
  storageBucket: "generalivn-2ce8c.appspot.com",
  messagingSenderId: "969409434628",
  appId: "1:969409434628:web:ffdd439e4bcc96295e1151",
  measurementId: "G-Z5MS1S07BR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
