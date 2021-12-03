import React from 'react'
import { TextInput } from 'react-native'
import styles from './style'

const Input = (props) => {
  const addtionalStyles = props.additionalStyles ? props.additionalStyles : []

  return (
    <TextInput {...props} style={[styles.input, ...addtionalStyles]}/>
  )
}

export default Input
