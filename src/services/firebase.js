import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDWUoU5pctjPNt1s7lRfhjwnY2XDF6xC5o",
  authDomain: "app-chat-c4f79.firebaseapp.com",
  projectId: "app-chat-c4f79",
  storageBucket: "app-chat-c4f79.appspot.com",
  messagingSenderId: "740630236090",
  appId: "1:740630236090:web:77343cd7ebebcb5db06b83",
  measurementId: "G-XS5J2E16TD",
  databaseURL: "https://app-chat-c4f79-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();
