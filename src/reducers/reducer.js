const initialState = {
  words: [
    {
      id: 1,
      englishWord: 'First',
      translateWord: 'Перший',
    },
    {
      id: 2,
      englishWord: 'Second',
      translateWord: 'Другий',
    },
    {
      id: 3,
      englishWord: 'Third',
      translateWord: 'Третій',
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
