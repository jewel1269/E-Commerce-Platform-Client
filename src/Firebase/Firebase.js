// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXWpLttZjxMdeA2wGIKoIVbnvMvYREz9U",
  authDomain: "my-portfolio-e938f.firebaseapp.com",
  projectId: "my-portfolio-e938f",
  storageBucket: "my-portfolio-e938f.appspot.com",
  messagingSenderId: "826591919618",
  appId: "1:826591919618:web:5e330ba4b2e9610a2fb11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;