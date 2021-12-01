import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { THEME } from '../action-types'

const initialState = {
  defaultTheme: {
    primaryColor: '#2AB481',
    secundaryColor: '#FFFFFF',
    backgroundColor: '#F2F2F2',
    fontColor: '#808080',
    yellowColor: 'red',
    blueColor: 'blue',
    greenColor: 'green'
  },
  darkTheme: {
    primaryColor: '#2AB481',
    secundaryColor: '#8c8c8c',
    backgroundColor: '#333333',
    fontColor: '#808080',
    yellowColor: 'red',
    blueColor: 'blue',
    greenColor: 'green'
  },
  theme: {
  }
}

const { SET_THEME } = THEME

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: state[action.payload]
          ? state[action.payload]
          : state.theme
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
