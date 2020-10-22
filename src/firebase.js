import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBUa_ND7RF858JIYeUcWWeUhyw72jLtfXs",
    authDomain: "vue-2f8d5.firebaseapp.com",
    databaseURL: "https://vue-2f8d5.firebaseio.com",
    projectId: "vue-2f8d5",
    storageBucket: "vue-2f8d5.appspot.com",
    messagingSenderId: "226686245413",
    appId: "1:226686245413:web:be7fb6ab096e294aecbdcc"
   
});

export const db = app.database();
export const namesRef = db.ref('names');
export const loginRef = db.ref('loginInfo');
export const productRef = db.ref('products');
