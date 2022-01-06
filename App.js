import React from 'react'
import { NavigationProvider, StateProvider, SecureAreaProvider, LocaleProvider, AuthProvider } from './src/providers'

AuthProvider()
LocaleProvider()

export default () => (
  <StateProvider>
    <SecureAreaProvider>
      <NavigationProvider />
    </SecureAreaProvider>
  </StateProvider>
)
