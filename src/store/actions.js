import { storage, database } from '../firebase'

export const removeGame = (title, id) => {
  return () => {
    const gameRef = database.ref(`games/${title}`)
    gameRef.remove()
  
    const picRef = storage.ref().child(`games/${id}`)
    picRef.delete()
  }
}


export const removeModeToggle = () => {
  return {
    type: 'REMOVE_MODE_TOGGLE'
  }
}