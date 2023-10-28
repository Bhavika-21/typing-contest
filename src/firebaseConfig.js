import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDxvMSW3hpIbWaehz4GQjZyT3QMpFNLeEQ",
    authDomain: "typing-speed-28ef4.firebaseapp.com",
    projectId: "typing-speed-28ef4",
    storageBucket: "typing-speed-28ef4.appspot.com",
    messagingSenderId: "906780368678",
    appId: "1:906780368678:web:53927912e61ad82e0d2be7",
    measurementId: "G-2Y0JVD8PHG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db } 
