import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '../states/reducers'

const store = createStore(combineReducers({ ...reducers }))

const StateProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.object
}

export default StateProvider
