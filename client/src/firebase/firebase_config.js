import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

let local = {REACT_APP_FIREBASE_API_KEY: "AIzaSyDEUNCta2DoOpGsfjGq3ocG_PoVKD-EhoU",
REACT_APP_FIREBASE_AUTH_DOMAIN: "personal-gallery-9243b.firebaseapp.com",
REACT_APP_FIREBASE_PROJECT_ID: "personal-gallery-9243b",
REACT_APP_FIREBASE_STOREAGE_BUCKET: "personal-gallery-9243b.appspot.com",
REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "1096920914936",
REACT_APP_FIREBASE_APP_ID: "1:1096920914936:web:2f204fbbe865cf7c75540d",
REACT_APP_FIREBASE_MEASUREMENT: "G-9510TCRTNR"}

const app = firebase.initializeApp({
  apiKey: local.REACT_APP_FIREBASE_API_KEY,
  authDomain: local.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: local.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: local.REACT_APP_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: local.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: local.REACT_APP_FIREBASE_APP_ID,
  measurementId: local.REACT_APP_FIREBASE_MEASUREMENT
});


//-----------export the database------
export const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

//------- use firebase internal timestamps-------
firestore.settings({ timestampsInSnapshots: true });

//------export the component---------
export default app;