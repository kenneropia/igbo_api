import { getApp, initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isProduction } from '../config';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const STAGING_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: 'AIzaSyBT-aJ42H2qVeTAtHhKZAeOfI6P99_rUK0',
  authDomain: 'fastfeedback-9e6c3.firebaseapp.com',
  projectId: 'fastfeedback-9e6c3',
  storageBucket: 'fastfeedback-9e6c3.appspot.com',
  messagingSenderId: '628420345315',
  appId: '1:628420345315:web:1a75d4e1bf0cfc8faab4d6',
};

const PRODUCTION_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: 'AIzaSyBDXPLmvu7YEagwdgp_W4uoZhCglbXrG6M',
  authDomain: 'igbo-api-bb22d.firebaseapp.com',
  projectId: 'igbo-api-bb22d',
  storageBucket: 'igbo-api-bb22d.appspot.com',
  messagingSenderId: '299917108135',
  appId: '1:299917108135:web:e5053fceeba3155b624c82',
  measurementId: 'G-YGGV667F2H',
};

initializeApp(isProduction ? PRODUCTION_FIREBASE_CONFIG : STAGING_FIREBASE_CONFIG);

const functions = getFunctions(getApp());
if (!isProduction) {
  connectFunctionsEmulator(functions, 'localhost', 5005);
  console.debug('Using Functions emulator: http://localhost:5005');
}
