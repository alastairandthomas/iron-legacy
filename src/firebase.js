// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwnxtpkJ6HtuRGlHzr4rbhPb6A_ow28-Y',
  authDomain: 'ironhack-projects-f2422.firebaseapp.com',
  projectId: 'ironhack-projects-f2422',
  storageBucket: 'ironhack-projects-f2422.appspot.com',
  messagingSenderId: '413712794694',
  appId: '1:413712794694:web:108aee710873c5eed83647',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
