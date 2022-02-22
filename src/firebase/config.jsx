import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDV0MGrqR6T14o8ga3znhMPtItJ9pYYVas",
  authDomain: "monetary-4b883.firebaseapp.com",
  projectId: "monetary-4b883",
  storageBucket: "monetary-4b883.appspot.com",
  messagingSenderId: "621960193241",
  appId: "1:621960193241:web:04db85e077979777408ac8",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const fireauth = firebase.auth();

export {firestore, fireauth}