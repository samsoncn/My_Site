import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoYJpSzavZvthRNMKVv1PpTwDJuoSQTWM",
    authDomain: "samson-studio.firebaseapp.com",
    projectId: "samson-studio",
    storageBucket: "samson-studio.appspot.com",
    messagingSenderId: "1073553788982",
    appId: "1:1073553788982:web:73461b6f9dca1b8fc28897"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const webStorage = firebase.storage();
const webFirststore = firebase.firebase();

export { webStorage, webFirststore};
