import { database, storage } from './firebase'

export const pushData = (title, price, rating, description, image) => {
  const storageRef = storage.ref()
  const imageRef = storageRef.child(`games/${image.name}`)
  
  const dbRef = database.ref()
  const gamesRef = dbRef.child(`games/${title}`)

  imageRef.put(image)
  .then(() => {
    storageRef.child(`games/${image.name}`).getDownloadURL()
    .then(url => {
      gamesRef.set({
        name: title,
        price: price,
        rating: rating,
        description: description,
        imageUrl: url,
        id: gamesRef.push().key
      })
    })
  })
}
