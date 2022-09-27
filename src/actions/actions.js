export const addWord = word => {
  return {
    type: 'ADD_WORD',
    payload: word,
  }
}

export const addResult = result => {
  return {
    type: 'ADD_RESULT',
    payload: result,
  }
}

export const addCurrentResult = result => {
  return {
    type: 'ADD_CURRENT_RESULT',
    payload: result,
  }
}
