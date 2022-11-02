import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCyOUknlH2S_t3JhG2ob0x9Nxs3e4Kzs1c",
  authDomain: "intra-51c6f.firebaseapp.com",
  databaseURL: "https://intra-51c6f-default-rtdb.firebaseio.com",
  projectId: "intra-51c6f",
  storageBucket: "intra-51c6f.appspot.com",
  messagingSenderId: "1063156358787",
  appId: "1:1063156358787:web:2f92fb1ce2f9506ea985b6"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const messageCollection = db.collection('message');

export const submitMessage = (message) => {
	return messageCollection.add(message);
};
