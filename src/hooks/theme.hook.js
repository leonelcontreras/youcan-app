import { useSelector, useDispatch } from 'react-redux'
import { THEME } from '../states/action-types'

const useTheme = () => {
  const { SET_THEME } = THEME
  const { theme } = useSelector(state => state.themeReducer)
  const dispatch = useDispatch()

  if (!theme || !theme.primaryColor) dispatch({ type: SET_THEME, payload: 'defaultTheme' })

  return {
    ...theme
  }
}

export default useTheme
