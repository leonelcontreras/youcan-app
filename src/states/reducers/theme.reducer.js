import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { THEME } from '../action-types'
import { StyleService } from '../../services'

const initialState = {
  defaultTheme: {
    primaryColor: '#2575fc',
    primaryColor100: '#023997',
    secundaryColor: '#FFFFFF',
    backgroundColor: '#f4f8ff',
    fontColor: '#023997',
    red: '#ff4d4d',
    purple: '#6a11cb',
    darkPurple: '#751aff',
    lightPurple: '#b071f4',
    pink: '#e699ff',
    darkPink: '#cc00ff',
    blue: '#023997',
    green: '#2AB481',
  },
  darkTheme: {
    primaryColor: '#2575fc',
    primaryColor100: '#023997',
    secundaryColor: '#FFFFFF',
    backgroundColor: '#333333',
    fontColor: '#023997',
    red: '#ff4d4d',
    purple: '#6a11cb',
    lightPurple: '#751aff',
    pink: '#e699ff',
    darkPink: '#cc00ff',
    blue: '#023997',
    green: '#2AB481',
  }
}

const { SET_THEME } = THEME
const styleService = StyleService()
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: state[action.payload]
          ? styleService.getStyles(state[action.payload])
          : styleService.getStyles(state.defaultTheme)
      }
    default:
      return state
  }
}

const persistConfig = {
  key: 'theme',
  storage: AsyncStorage,
  whitelist: ['theme']
}

export default persistReducer(persistConfig, themeReducer)
