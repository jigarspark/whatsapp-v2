import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8WcndCa3ZR8cqioRYd9JHD0FVIXigukY",
  authDomain: "whatsapp-v2-662c3.firebaseapp.com",
  projectId: "whatsapp-v2-662c3",
  storageBucket: "whatsapp-v2-662c3.appspot.com",
  messagingSenderId: "23210340569",
  appId: "1:23210340569:web:e34521f1a0ce7772fa8ec8"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};