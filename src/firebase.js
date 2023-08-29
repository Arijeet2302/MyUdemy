import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBfzG3QpUceEuL6hwL5ea6fe9f-xtlYAQ8",
  authDomain: "myudemy-32b19.firebaseapp.com",
  projectId: "myudemy-32b19",
  storageBucket: "myudemy-32b19.appspot.com",
  messagingSenderId: "1071968932446",
  appId: "1:1071968932446:web:5eca67fb35d52e287ddacf",
  measurementId: "G-31S8CKZKBP"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app};