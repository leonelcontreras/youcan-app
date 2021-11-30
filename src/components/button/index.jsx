import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

const Button = (props) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
)

export default Button
