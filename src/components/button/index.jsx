import React from 'react'
import { Pressable, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import styles from './style'

const Button = (props) => {
  const additionalStyles = props.additionalStyles ? props.additionalStyles : []
  const { textStyle } = props

  return (
    <LinearGradient
      locations={[0,0.5]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.colors ? props.colors : []}
      style={[styles.button, ...additionalStyles]}
    >
      <Pressable {...props}>
        <Text style={[styles.text, textStyle]}>{props.title}</Text>
      </Pressable>  
    </LinearGradient>
  )
}

export default Button
