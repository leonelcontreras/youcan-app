import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '../states/reducers'

const store = createStore(combineReducers({...reducers}))

export default ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}