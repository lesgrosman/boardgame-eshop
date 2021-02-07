import firebase from './firebase'

export const pushData = (title, price, rating, description) => {
  const ref = firebase.database().ref('games')

  const gamesRef = ref.child(title)
  gamesRef.set({
    name: title,
    price: price,
    rating: rating,
    description: description,
    id: gamesRef.push().key
  })
}