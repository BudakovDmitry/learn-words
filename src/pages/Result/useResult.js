import { useSelector } from 'react-redux'

export const useResult = () => {
  const currentResult = useSelector(state => state.currentResult)

  return {
    currentResult,
  }
}
