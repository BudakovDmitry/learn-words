const initialState = {
  words: [
    {
      id: 1,
      englishWord: 'Hello',
      translateWord: 'Привет',
    },
    {
      id: 2,
      englishWord: 'Yes',
      translateWord: 'Да',
    },
    {
      id: 3,
      englishWord: 'Bye',
      translateWord: 'Пока',
    },
    {
      id: 4,
      englishWord: 'Love',
      translateWord: 'Любить',
    },
    {
      id: 5,
      englishWord: 'Play',
      translateWord: 'Играть',
    },
    {
      id: 6,
      englishWord: 'I',
      translateWord: 'Я',
    },
    {
      id: 7,
      englishWord: 'Football',
      translateWord: 'Футбол',
    },
    {
      id: 8,
      englishWord: 'Have',
      translateWord: 'Иметь',
    },
    {
      id: 9,
      englishWord: 'Good night',
      translateWord: 'Спокойной ночи',
    },
    {
      id: 10,
      englishWord: 'She',
      translateWord: 'Она',
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
