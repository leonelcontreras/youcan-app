import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import * as reducers from '../states/reducers'

const store = createStore(combineReducers({ ...reducers }))
const persistor = persistStore(store)

const StateProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.object
}

export default StateProvider
