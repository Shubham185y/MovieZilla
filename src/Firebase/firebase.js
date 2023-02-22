// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQCyE2Wxeelula1pLJbGa8dNBNVIERZw",
  authDomain: "moviezilla-a404d.firebaseapp.com",
  projectId: "moviezilla-a404d",
  storageBucket: "moviezilla-a404d.appspot.com",
  messagingSenderId: "71352134403",
  appId: "1:71352134403:web:abc9b82367fdf15c13d736",
  measurementId: "G-TPW3K7CLLP"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;
