import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQdaLD4657P4QAacChgWT6gxnJm5F9yvk",
  authDomain: "learnlingo-9ddfb.firebaseapp.com",
  projectId: "learnlingo-9ddfb",
  storageBucket: "learnlingo-9ddfb.appspot.com",
  messagingSenderId: "855844284185",
  appId: "1:855844284185:web:23f34d55baead464d48788",
  measurementId: "G-GJF90GS411",
  databaseURL: "https://learnlingo-9ddfb-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
