import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAYGaTIoKLyQ3wETf_qvzc7UAB9o3F_fwc',
  authDomain: 'form-registration-9f85d.firebaseapp.com',
  databaseURL: 'https://form-registration-9f85d-default-rtdb.firebaseio.com',
  projectId: 'form-registration-9f85d',
  storageBucket: 'form-registration-9f85d.appspot.com',
  messagingSenderId: '31821623862',
  appId: '1:31821623862:web:b0b642c4c222adbd659e97',
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
