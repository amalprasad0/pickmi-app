import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeAuth } from "firebase/auth"
import { getReactNativePersistence } from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyDPZ2w55rKBIKN8gV5a4foMnuDEUf1obOM",
  authDomain: "pickmi-371b4.firebaseapp.com",
  projectId: "pickmi-371b4",
  storageBucket: "pickmi-371b4.appspot.com",
  messagingSenderId: "917078849830",
  appId: "1:917078849830:web:66e3e105304ef4ea5ea9e7",
  measurementId: "G-XFXWEH9CE0"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
initializeAuth(Firebase, {
  persistence: getReactNativePersistence(AsyncStorage)
});