const initialState = {
  words: [],
  allResults: [],
  currentResult: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return {
        ...state,
        words: [...state.words, action.payload],
      }
    case 'ADD_RESULT':
      return {
        ...state,
        allResults: [...state.allResults, action.payload],
      }
    case 'ADD_CURRENT_RESULT':
      return {
        ...state,
        currentResult: action.payload,
      }
    default:
      return state
  }
}

export default reducer
