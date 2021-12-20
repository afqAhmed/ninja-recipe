import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoMxrYgmM4TaCCw1I-uVE4Gijn4r6LRmM",
  authDomain: "food-recipes-8cf3c.firebaseapp.com",
  projectId: "food-recipes-8cf3c",
  storageBucket: "food-recipes-8cf3c.appspot.com",
  messagingSenderId: "828615482594",
  appId: "1:828615482594:web:3e503f14f5e0bda6e612bb"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)