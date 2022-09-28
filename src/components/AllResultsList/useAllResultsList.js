import { useSelector } from 'react-redux'

export const useAllResultsList = () => {
  const allResults = useSelector(state => state.allResults)

  return {
    allResults,
  }
}
