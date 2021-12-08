import React from 'react'
import { Container, Text, Input, Button } from '../components'
import { useTheme, useTranslate } from '../hooks'

const LoginView = ({ form, onNavigate }) => {
  const translate = useTranslate()

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
        text={translate('login.title')}
        additionalStyles={[fontColor]}
      />
      <Text
        text={translate('login.subtitle')}
        additionalStyles={[marginTop20, fontColor]}
      />
      <Input
        id='email'
        name='email'
        placeholder={translate('login.email-placeholder')}
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
        placeholder={translate('login.pass-placeholder')}
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
        text={translate('login.forget-pass')}
      />
      <Text
        type='link'
        text={translate('login.forget-pass-action')}
        additionalStyles={[primaryColor]}
        onPress={() => onNavigate('Recover')}
      />
      <Button 
        title={translate('login.action')}
        onPress={handleSubmit}
        additionalStyles={[marginTop20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Text
        additionalStyles={[marginTop20, fontColor]}
        text={translate('login.not-account')}/>
      <Text 
        type='link'
        additionalStyles={[primaryColor]}
        text={translate('login.not-account-action')}
        onPress={() => onNavigate('Signup')}  
      />
    </Container>
  )
}

export default LoginView
