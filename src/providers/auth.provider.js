import { initializeApp } from 'firebase/app'

const config = {
  apiKey: "AIzaSyCMD3-HUnU4MYuHOdBv_d9Z9To7BKa4N3A",
  authDomain: "you-can-707f9.firebaseapp.com",
  projectId: "you-can-707f9",
  storageBucket: "you-can-707f9.appspot.com",
  messagingSenderId: "293101849658",
  appId: "1:293101849658:web:550d3c87a516f62b763903",
  measurementId: "G-11P7DR2WFK"
}

const AuthProvider = () => initializeApp(config)

export default AuthProvider
