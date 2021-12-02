import React from 'react'
import { Text } from 'react-native'
import styles from './style'

const TextComponent = ({ type, text, additionalStyles=[] }) => {
  const selectedClass = styles[type] ? styles[type] : styles.label

  return (
    <Text style={[selectedClass, ...additionalStyles]}>
      { text }
    </Text>
  )
}

export default TextComponent
