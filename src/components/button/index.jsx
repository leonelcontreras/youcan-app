import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './style'

const Button = (props) => {
  const additionalStyles = props.additionalStyles ? props.additionalStyles : []
  const { buttonStyle, textStyle } = props

  return (
    <Pressable style={[styles.button, buttonStyle, ...additionalStyles]} {...props}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </Pressable>
  )
}

export default Button
