import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { THEME } from '../action-types'
import { StyleService } from '../../services'

const initialState = {
  defaultTheme: {
    primaryColor: '#27a577',
    primaryColor100: '#18674a',
    secundaryColor: '#FFFFFF',
    backgroundColor: '#F2F2F2',
    fontColor: '#4d4d4d',
    redColor: '#ff4d4d',
    blueColor: 'blue',
    greenColor: 'green'
  },
  darkTheme: {
    primaryColor: '#2AB481',
    secundaryColor: '#8c8c8c',
    backgroundColor: '#333333',
    fontColor: '#808080',
    redColor: '#ff4d4d',
    blueColor: 'blue',
    greenColor: 'green'
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
