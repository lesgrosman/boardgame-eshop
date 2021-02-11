import { database } from '../firebase'

export const getData = (isCancelled) => {
  return dispatch => {
    const gamesRef = database.ref('games')
    gamesRef.on('value', (snapshot) => {
      if (!isCancelled) {
        dispatch(setData(snapshot.val()))
      }
    })
  }  
}

export const setData = (games) => {
  return {
    type: 'SET_DATA',
    games
  }
}

export const removeModeToggle = () => {
  return {
    type: 'REMOVE_MODE_TOGGLE'
  }
}