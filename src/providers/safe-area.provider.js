import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const SecureAreaProvider = ({ children }) => (
  <SafeAreaProvider>
    {children}
  </SafeAreaProvider>
)

SecureAreaProvider.propTypes = {
  children: PropTypes.object
}

export default SecureAreaProvider
