import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9VG9EoTuQY-zgXKHwhk-n03jL4Y_iKn4",
    authDomain: "projetoead-c5ab7.firebaseapp.com",
    projectId: "projetoead-c5ab7",
    storageBucket: "projetoead-c5ab7.appspot.com",
    messagingSenderId: "545370731381",
    appId: "1:545370731381:web:6aba600eaa0553e6fa593c"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;