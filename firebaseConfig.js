import { initializeApp } from 'firebase/app';
import {
    initializeAuth, getReactNativePersistence
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyAcictnKPsnIq7Udyiz2XGIuMo72dRdlvU",
    authDomain: "e-commerce-js-app.firebaseapp.com",
    databaseURL: "https://e-commerce-js-app-default-rtdb.firebaseio.com",
    projectId: "e-commerce-js-app",
    storageBucket: "e-commerce-js-app.firebasestorage.app",
    messagingSenderId: "383942089852",
    appId: "1:383942089852:web:99224fda7fd586e7cafdf9",
    measurementId: "G-TV0G1TS360"
};
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}); export const db = getFirestore(app);
