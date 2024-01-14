import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth();
