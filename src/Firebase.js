import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSuY2PfQYuVIBLhsBmNqMHOvoLwK36iYc",
  authDomain: "ead-web-atp.firebaseapp.com",
  projectId: "ead-web-atp",
  storageBucket: "ead-web-atp.appspot.com",
  messagingSenderId: "524069853449",
  appId: "1:524069853449:web:fe8fd63119ff432a629bd8"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;