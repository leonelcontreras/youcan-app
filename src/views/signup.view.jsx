import React from 'react'
import { Container, Input, Button, Text } from '../components'
import { useTranslate, useTheme } from '../hooks'

const SignUpView = ({ form, onNavigateLogin }) => {
  const translate = useTranslate()
  const {
    primaryColor,
    fontColor,
    fontColorError,
    primaryButton,
    primaryText,
    inputError,
    marginTop20
  } = useTheme()

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = form

  return (
    <Container>
      <Text
        type='title'
        text={translate('signup.title')}
        additionalStyles={[fontColor]}
      />
      <Text
        text={translate('signup.subtitle')}
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
      <Input
        id='repeatPassword'
        name='repeatPassword'
        placeholder={translate('signup.repeat-password')}
        secureTextEntry
        value={values.repeatPassword}
        onFocus={handleBlur('repeatPassword')}
        onChangeText={handleChange('repeatPassword')}
        additionalStyles={[marginTop20, fontColor, errors.repeatPassword && touched.repeatPassword ? inputError : null]}
      />
      {
        (errors.repeatPassword && touched.repeatPassword) ? 
          (<Text text={errors.repeatPassword} type='error' additionalStyles={[fontColorError]}/>) 
          : null
      }
      <Button 
        title={translate('signup.action')}
        onPress={handleSubmit}
        additionalStyles={[marginTop20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Text 
        text={translate('signup.already-account')}
        additionalStyles={[marginTop20, fontColor]}
      />
      <Text 
        type='link'
        additionalStyles={[primaryColor]}
        text={translate('signup.login')}
        onPress={() => onNavigateLogin()}
      />
    </Container>    
  )
}

export default SignUpView
