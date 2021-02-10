const initialState = {
  removeMode: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'REMOVE_MODE_TOGGLE':
      return {
        ...state,
        removeMode: !state.removeMode
      }
    case 'REMOVE_MODE_OFF':
      return {
        ...state,
        removeMode: !state.removeMode
      }
    default:
      return state
  }
}

export default reducer