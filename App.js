import React from 'react'
import { NavigationProvider, StateProvider } from './src/providers'

export default () => (
  <StateProvider>
    <NavigationProvider />
  </StateProvider>
)
