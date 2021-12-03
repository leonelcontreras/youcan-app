import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'

const Container = ({ children }) => (
  <SafeAreaView>
    <View style={styles.container}>
      {children}
    </View>
  </SafeAreaView>
)


export default Container
