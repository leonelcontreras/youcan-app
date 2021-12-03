import React from 'react'
import { NavigationProvider, StateProvider, SecureAreaProvider } from './src/providers'

export default () => (
  <StateProvider>
    <SecureAreaProvider>
      <NavigationProvider />
    </SecureAreaProvider>
  </StateProvider>
)
