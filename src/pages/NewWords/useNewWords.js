import { addWord } from 'src/actions/actions'
import { usePage } from 'src/hooks/usePage'
import { nanoid } from 'nanoid'

export const useNewWords = () => {
  const { dispatch } = usePage()

  const addNewWord = word => {
    dispatch(
      addWord({
        ...word,
        id: nanoid(),
      }),
    )
  }

  return {
    addNewWord,
  }
}
