export const addWord = newWord => {
  return {
    type: 'ADD_WORD',
    payload: newWord,
  }
}
