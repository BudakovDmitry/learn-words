import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const usePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return {
    navigate,
    dispatch,
  }
}
