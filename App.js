import React from 'react'
import { NavigationProvider, StateProvider, SecureAreaProvider, LocaleProvider } from './src/providers'

LocaleProvider()

export default () => (
  <StateProvider>
    <SecureAreaProvider>
      <NavigationProvider />
    </SecureAreaProvider>
  </StateProvider>
)
