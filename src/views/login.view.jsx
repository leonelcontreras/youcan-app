import React from 'react'
import { Container, Text, Input, Button } from '../components'
import { useTheme } from '../hooks'
import styles from '../../styles'

const LoginView = ({onPress}) => {
  const { theme } = useTheme()

  const primaryColor = {
    color: theme.primaryColor
  }

  const fontColor = {
    color: theme.fontColor
  }

  const primaryButton = {
    backgroundColor: theme.primaryColor,
    borderColor: theme.primaryColor100,
  }

  const primaryText = {
    color: theme.secundaryColor
  }

  return (
    <Container>
      <Text
        type='title'
        text='Bienvenido!'
        additionalStyles={[fontColor]}
      />
      <Text
        text='Hoy es un gran día'
        additionalStyles={[styles.marginBotton20, fontColor]}
      />
      <Input 
        placeholder='Ingresa tu email' 
        additionalStyles={[styles.marginBotton20, fontColor]}
      />
      <Input
        additionalStyles={[styles.marginBotton20, fontColor]}
        placeholder='Ingresa tu contraseña' />
      <Text
        additionalStyles={[fontColor]}
        text='¿Olvidaste tu contraseña?'
      />
      <Text
        type='link'
        text='Recuperala'
        additionalStyles={[styles.marginBotton20, primaryColor]}
      />
      <Button 
        title='Login'
        onPress={() => onPress()}
        additionalStyles={[styles.marginBotton20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Text
        additionalStyles={[fontColor]}
        text='¿No tienes cuenta?'/>
      <Text 
        type='link'
        additionalStyles={[styles.marginBotton10, primaryColor]}
        text='Crea una' />
    </Container>
  )
}

export default LoginView
