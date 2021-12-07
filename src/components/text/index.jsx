import React from 'react'
import { Text } from 'react-native'
import styles from './style'

const TextComponent = (props) => {
  const { type, text, additionalStyles=[] } = props
  const selectedClass = styles[type] ? styles[type] : styles.label

  return (
    <Text style={[selectedClass, ...additionalStyles]} {...props}>
      { text }
    </Text>
  )
}

export default TextComponent
