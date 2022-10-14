import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccount.js'

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore();

//1.Customers
// const NewCustomer = {
//     name: 'katya',
//     phone: 7545640064,
//     location: 'Deerfield beach',
//     email: "Katyac8@gmail.com"
// }

// db.collection('Customer').add(NewCustomer)

// .then(doc => console.log('Customer created', doc.id))
// .catch(console.error)

//2.Products
// const NewPets = {
//     name: '',
//     species: 'Cat',
//     breed: 'shit-zu',
//     vacinated: false,
//     age: '3years',
// }

// db.collection('Pets').add(NewPets)

// .then(doc => console.log('Pet created', doc.id))
// .catch(console.error)


const NewProducts = {
    name: 'Kong',
    serialnumber: 359067,
    datestock: 2015,
    price: '$24.99',
}

db.collection('Product').add(NewProducts)

.then(doc => console.log('Product created', doc.id))
.catch(console.error)

// .then(collection => {
//     collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())
//     })
// })
// .catch(console.error)