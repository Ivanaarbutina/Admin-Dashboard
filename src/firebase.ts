import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEcJy973kNB-XtIDDPAW0c4E-85GvSfe4",
  authDomain: "admin-dashboard-3347f.firebaseapp.com",
  projectId: "admin-dashboard-3347f",
  storageBucket: "admin-dashboard-3347f.appspot.com",
  messagingSenderId: "802688582864",
  appId: "1:802688582864:web:a3320288f82e416068cad5",
  measurementId: "G-C138ZC0JWR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
