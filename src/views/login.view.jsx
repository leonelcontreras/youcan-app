import React from 'react'
import { Container, Text, Input, Button } from '../components'
import { useTheme } from '../hooks'

const LoginView = ({ form }) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = form
  
  const {
    primaryColor,
    fontColor,
    fontColorError,
    primaryButton,
    primaryText,
    inputError,
    marginTop20
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
        additionalStyles={[marginTop20, fontColor]}
      />
      <Input
        id='email'
        name='email'
        placeholder='Ingresa tu email'
        value={values.email}
        onFocus={form.handleBlur('email')}
        onChangeText={form.handleChange('email')}
        additionalStyles={[marginTop20, fontColor, errors.email && touched.email ? inputError : null]}
      />
      {
        (errors.email && touched.email) ? 
          (<Text text={errors.email} type='error' additionalStyles={[fontColorError]} />) 
          : null
      }
      <Input
        id='password'
        name='password'
        placeholder='Ingresa tu contraseña'
        secureTextEntry
        value={values.password}
        onFocus={handleBlur('password')}
        onChangeText={handleChange('password')}
        additionalStyles={[marginTop20, fontColor, errors.password && touched.password ? inputError : null]}
      />
      {
        (errors.password && touched.password) ? 
          (<Text text={errors.password} type='error' additionalStyles={[fontColorError]}/>) 
          : null
      }
      <Text
        additionalStyles={[marginTop20, fontColor]}
        text='¿Olvidaste tu contraseña?'
      />
      <Text
        type='link'
        text='Recuperala'
        additionalStyles={[primaryColor]}
      />
      <Button 
        title='Login'
        onPress={handleSubmit}
        additionalStyles={[marginTop20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Text
        additionalStyles={[marginTop20, fontColor]}
        text='¿No tienes cuenta?'/>
      <Text 
        type='link'
        additionalStyles={[primaryColor]}
        text='Crea una' />
    </Container>
  )
}

export default LoginView
