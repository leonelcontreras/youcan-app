import React from 'react'
import { View, StyleSheet } from 'react-native'
import styles from './style'

console.log('styles -->', styles)

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)


export default Container
