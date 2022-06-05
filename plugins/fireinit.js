import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBstNCfeIIlMShvnUkeY42Wo6BzHBqkLzY",
  authDomain: "tinder-fire.firebaseapp.com",
  projectId: "tinder-fire",
  storageBucket: "tinder-fire.appspot.com",
  messagingSenderId: "688057132520",
  appId: "1:688057132520:web:f4263dc85f41242111305d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }