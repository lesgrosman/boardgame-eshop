import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCMEUnM6FOXRiBP0fm4rbQ742CL82XNemo",
  authDomain: "boardgame-eshop.firebaseapp.com",
  databaseURL: "https://boardgame-eshop-default-rtdb.firebaseio.com",
  projectId: "boardgame-eshop",
  storageBucket: "boardgame-eshop.appspot.com",
  messagingSenderId: "689557132971",
  appId: "1:689557132971:web:44119619094698bf7189ee"
}
firebase.initializeApp(config)

export default firebase