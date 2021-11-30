import React from 'react'
import { Text, View } from 'react-native'
import { NavigationProvider, StateProvider } from './src/providers'

export default function App() {
  return (
    <StateProvider>
      <NavigationProvider>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </NavigationProvider>
    </StateProvider>
  )
}
