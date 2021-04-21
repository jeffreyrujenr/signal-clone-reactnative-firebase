import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDHXxWNOgxIN8-jijkFERey0Ldw9DignVc",
    authDomain: "signal-clone-reactnative-432e2.firebaseapp.com",
    projectId: "signal-clone-reactnative-432e2",
    storageBucket: "signal-clone-reactnative-432e2.appspot.com",
    messagingSenderId: "136856396225",
    appId: "1:136856396225:web:218a389c42067786be0f40"
};

let app

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }