const initialState = {
  removeMode: false,
  games: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'REMOVE_MODE_TOGGLE':
      return {
        ...state,
        removeMode: !state.removeMode
      }
    case 'SET_DATA':
      return {
        ...state,
        games: action.games
      }
    default:
      return state
  }
}

export default reducer