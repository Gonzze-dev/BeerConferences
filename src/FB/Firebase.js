import
{ 
  initializeApp,
  getApps, 
  getApp
} from "firebase/app";

import 
{
    initializeAuth,
    getReactNativePersistence, 
 } from "firebase/auth";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDAvky2X4QBpEtVOh_9Iv_L1J2TLK0ftO0",
  authDomain: "beerconference-58747.firebaseapp.com",
  projectId: "beerconference-58747",
  storageBucket: "beerconference-58747.appspot.com",
  messagingSenderId: "720847653307",
  appId: "1:720847653307:web:df2c7b9071ffbab8e21c9e"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});