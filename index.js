import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccount.js'

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore();