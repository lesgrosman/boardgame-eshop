import { database, storage } from './firebase'

export const addGame = (title, price, rating, description, image) => {
  const dbRef = database.ref()
  const gamesRef = dbRef.child(`games/${title}`)

  const id = gamesRef.push().key

  const storageRef = storage.ref()
  const imageRef = storageRef.child(`games/${id}`)

  imageRef.put(image)
  .then(() => {
    storageRef.child(`games/${id}`).getDownloadURL()
    .then(url => {
      gamesRef.set({
        name: title,
        price: price,
        rating: rating,
        description: description,
        imageUrl: url,
        id: id,
      })
    })
  })
}

export const removeGame = (title, id) => {
  const gameRef = database.ref(`games/${title}`)
  gameRef.remove()

  const picRef = storage.ref().child(`games/${id}`)
  picRef.delete()
  
}


