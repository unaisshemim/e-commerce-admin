// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxzMMjSKn_-I2JmTTBiisiyGO1MA2EE4",
  authDomain: "e-commerce-abc1c.firebaseapp.com",
  projectId: "e-commerce-abc1c",
  storageBucket: "e-commerce-abc1c.appspot.com",
  messagingSenderId: "222834384658",
  appId: "1:222834384658:web:0e54fde0c31482b6299dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app