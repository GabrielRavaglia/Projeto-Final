import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/functions";
import "firebase/compat/storage";
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAF6Gyr1Bt7cgCrt-MP_Lp8BcAqvt8y54k",
    authDomain: "projetofinal-a91e4.firebaseapp.com",
    projectId: "projetofinal-a91e4",
    storageBucket: "projetofinal-a91e4.appspot.com",
    messagingSenderId: "171824973708",
    appId: "1:171824973708:web:53099dfc965efa0cab78a9",
    measurementId: "G-ESZSVV1EJX"
  });

  
  

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

 

  export {db, auth, storage, functions};