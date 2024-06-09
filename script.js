import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgBPR2ebZYTphVmMu3SU5L5odB5Wj8CIE",
    authDomain: "hfinder-a1654.firebaseapp.com",
    projectId: "hfinder-a1654",
    storageBucket: "hfinder-a1654.appspot.com",
    messagingSenderId: "499610497454",
    appId: "1:499610497454:web:b1bb376ee3b16cf072183f",
    measurementId: "G-5NRBGX13EH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();