import * as firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFQ-lakk2fqbrf2Aegl0lrvdPyjKKOc-8",
    authDomain: "nuxt-course-d7185.firebaseapp.com",
    databaseURL: "https://nuxt-course-d7185.firebaseio.com",
    projectId: "nuxt-course-d7185",
    storageBucket: "nuxt-course-d7185.appspot.com",
    messagingSenderId: "482387103449",
    appId: "1:482387103449:web:4837e3f8e65c3523a178c8",
    measurementId: "G-C9NL1X5PP5"
};

// Initialize Firebase

let app = null

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default firebase