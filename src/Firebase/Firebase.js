// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClQ1dR2aYQ9CdRMgFZh0yM-fSn7Lu-egU",
  authDomain: "tasty-daily-ecommerce.firebaseapp.com",
  projectId: "tasty-daily-ecommerce",
  storageBucket: "tasty-daily-ecommerce.appspot.com",
  messagingSenderId: "435602908470",
  appId: "1:435602908470:web:c0eada91f81698f4e5bf97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;