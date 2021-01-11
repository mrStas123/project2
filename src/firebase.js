import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBxilAS1gagYW-XKiCBfdEh30lWtb-bc9Q",
    authDomain: "portfolio2-e9682.firebaseapp.com",
    projectId: "portfolio2-e9682",
    storageBucket: "portfolio2-e9682.appspot.com",
    messagingSenderId: "1070010875684",
    appId: "1:1070010875684:web:9b60b72631b8adcbf47db1",
    measurementId: "G-1WY4C7TG74"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }