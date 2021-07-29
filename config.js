import firebase from 'firebase';
require('@firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyBWBsP2EKH-8nUOUIzZvfgVUcvNPCbm3Tc",
  authDomain: "c76-homework.firebaseapp.com",
  projectId: "c76-homework",
  storageBucket: "c76-homework.appspot.com",
  messagingSenderId: "1052046452368",
  appId: "1:1052046452368:web:975c019d21ad5935619a15"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
