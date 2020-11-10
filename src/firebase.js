import firebase from 'firebase';

var firebaseApp =firebase.initializeApp(
  {
    apiKey: "AIzaSyDIkMk9uQw6TTeSbS8vJ7zeN9ds3skZ3WU",
    authDomain: "mnspace-5da3b.firebaseapp.com",
    databaseURL: "https://mnspace-5da3b.firebaseio.com",
    projectId: "mnspace-5da3b",
    storageBucket: "mnspace-5da3b.appspot.com",
    messagingSenderId: "579775517190",
    appId: "1:579775517190:web:5578f0fafec5fa06c5e987",
    measurementId: "G-3Y6G84SRG1"
    }

) ;

const db= firebaseApp.firestore();
const auth= firebase.auth();

export  {db,auth};

