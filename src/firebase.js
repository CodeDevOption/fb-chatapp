import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_WlU2Ov5A9sw0-zKoGJnXM2hk5VFyjVE",
    authDomain: "fb-massager.firebaseapp.com",
    projectId: "fb-massager",
    storageBucket: "fb-massager.appspot.com",
    messagingSenderId: "1021342011861",
    appId: "1:1021342011861:web:c4d021a08cbd2bf8b7ed5c",
    measurementId: "G-DYB1MDYL12"
  };

  export  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export const db = getFirestore(app);