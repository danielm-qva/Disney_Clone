
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getAuth , GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzVk2i4Fcy447SLh98RSS6Gi2xHCWMFiA",
  authDomain: "disney-9611.firebaseapp.com",
  projectId: "disney-9611",
  storageBucket: "disney-9611.appspot.com",
  messagingSenderId: "229150293454",
  appId: "1:229150293454:web:9a16dd650f007495a07f9f",
  measurementId: "G-BGH5M94L1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth , provider } ;
