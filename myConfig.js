import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVsWnkERGsreUYgaPOIOxvJcRTjuslFrg",
  authDomain: "synchronize-57796.firebaseapp.com",
  projectId: "synchronize-57796",
  storageBucket: "synchronize-57796.appspot.com",
  messagingSenderId: "608753746885",
  appId: "1:608753746885:web:f2e263cb7db0ed774441ac",
  measurementId: "G-1C40BSSX76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);