import React from 'react'
import { Container, Text, Input, Button } from '../components'
import { useTheme } from '../hooks'

const LoginView = ({onPress}) => {
  const { 
    primaryColor,
    fontColor,
    primaryButton,
    primaryText,
    marginBotton10,
    marginBotton20
  } = useTheme()

  return (
    <Container>
      <Text
        type='title'
        text='Bienvenido!'
        additionalStyles={[fontColor]}
      />
      <Text
        text='Hoy es un gran día'
        additionalStyles={[marginBotton20, fontColor]}
      />
      <Input 
        placeholder='Ingresa tu email' 
        additionalStyles={[marginBotton20, fontColor]}
      />
      <Input
        additionalStyles={[marginBotton20, fontColor]}
        placeholder='Ingresa tu contraseña' />
      <Text
        additionalStyles={[fontColor]}
        text='¿Olvidaste tu contraseña?'
      />
      <Text
        type='link'
        text='Recuperala'
        additionalStyles={[marginBotton20, primaryColor]}
      />
      <Button 
        title='Login'
        onPress={() => onPress()}
        additionalStyles={[marginBotton20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Text
        additionalStyles={[fontColor]}
        text='¿No tienes cuenta?'/>
      <Text 
        type='link'
        additionalStyles={[marginBotton10, primaryColor]}
        text='Crea una' />
    </Container>
  )
}

export default LoginView
