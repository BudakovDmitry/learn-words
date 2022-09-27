const initialState = {
  words: [
    {
      id: 1,
      englishWord: 'Hello',
      translateWord: 'Привет',
    },
    {
      id: 2,
      englishWord: 'Hello',
      translateWord: 'Привет',
    },
    {
      id: 3,
      englishWord: 'Hello',
      translateWord: 'Привет',
    },
    {
      id: 4,
      englishWord: 'Hello',
      translateWord: 'Привет',
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return {
        ...state,
        words: [...state.words, action.payload],
      }
    default:
      return state
  }
}

export default reducer
