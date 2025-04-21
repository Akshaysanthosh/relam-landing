import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc4JDHZROCGo1gtGVGefstBg0u41pHlSY",
  authDomain: "relamwaitlist.firebaseapp.com",
  projectId: "relamwaitlist",
  storageBucket: "relamwaitlist.appspot.com",
  messagingSenderId: "264184635550",
  appId: "1:264184635550:web:0908009526609fffbe5b8f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };