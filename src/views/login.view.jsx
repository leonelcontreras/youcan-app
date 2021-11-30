import React from 'react'
import { View, Text } from 'react-native'
import { Container, Input, Button } from '../components'

const LoginView = ({onSubmit}) => {
  return (
    <Container>
      <Text>Hola again</Text>
      <Input />
      <Input />
      <Button title='Login' onPress={() => onSubmit()} />
    </Container>
  )
}

export default LoginView
