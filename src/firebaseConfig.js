import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCBk4cVDKA4yAKmYcOMAwTY1fAQCLK7Uk0',
  authDomain: 'entertainment-web-app-e8148.firebaseapp.com',
  projectId: 'entertainment-web-app-e8148',
  storageBucket: 'entertainment-web-app-e8148.appspot.com',
  messagingSenderId: '302141700855',
  appId: '1:302141700855:web:85094cd51caf2bb4ef71f2',
  measurementId: 'G-8DHWK27EZC',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
