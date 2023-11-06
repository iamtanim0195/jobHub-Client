// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXb1Nk13PzxCgh2b6hPnTV1zVIOp-jAgk",
    authDomain: "project-11-604e1.firebaseapp.com",
    projectId: "project-11-604e1",
    storageBucket: "project-11-604e1.appspot.com",
    messagingSenderId: "335548176164",
    appId: "1:335548176164:web:79bcd42af50a8ab32085b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


