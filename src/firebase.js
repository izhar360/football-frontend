import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBS-f2PZ_vKXF1eBU1B4L4Fncrg_daXE9o",
  authDomain: "mancity-f3506.firebaseapp.com",
  databaseURL: "https://mancity-f3506-default-rtdb.firebaseio.com",
  projectId: "mancity-f3506",
  storageBucket: "mancity-f3506.appspot.com",
  messagingSenderId: "972394070389",
  appId: "1:972394070389:web:127bdcffa79f46ce1ed33c",
  measurementId: "G-8D6ETYB1L1",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebasePlayers = firebaseDB.ref("players");
const firebaseTeams = firebaseDB.ref("teams");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebasePlayers,
  firebaseTeams,
  firebaseDB,
};
