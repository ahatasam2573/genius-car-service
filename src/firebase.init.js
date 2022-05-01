// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBh9ehOugo4jODCmOBIh0S2HCGOz3eTWtw',
    authDomain: 'genius-car-services-8dcdc.firebaseapp.com',
    projectId: 'genius-car-services-8dcdc',
    storageBucket: 'genius-car-services-8dcdc.appspot.com',
    messagingSenderId: '151001844611',
    appId: '1:151001844611:web:f3ce85e45263d21f14c4b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;