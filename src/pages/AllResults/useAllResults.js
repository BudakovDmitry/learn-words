import { useSelector } from 'react-redux'

export const useAllResults = () => {
  const allResults = useSelector(state => state.allResults)

  return {
    allResults,
  }
}
