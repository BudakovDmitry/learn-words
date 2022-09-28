import { useSelector } from 'react-redux'

export const useListWords = () => {
  const words = useSelector(state => state.words)

  return {
    words,
  }
}
