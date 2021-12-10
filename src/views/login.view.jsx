import React from 'react'
import { Container, Text, Input, Button, Gradient, Image } from '../components'
import { useTheme, useTranslate } from '../hooks'
import icon from '../../assets/logo3.webp'

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
    fontColorErrorClass,
    lightPurpleColorClass,
    primaryClass,
    primaryTextClass,
    inputErrorClass,
    marginTop20Class,
    primaryColor,
    pink,
    darkPink,
    purple,
    darkPurple,
    lightPurple
  } = useTheme()

  const gradientClass = {
    position: 'absolute',
    borderRadius: 300,
    height: 600,
    width: 600,
  }

  return (
    <Container>
    <Gradient
      locations={[0.5, 0.9]}
      colors={[darkPink, pink]}
      style={{
        ...gradientClass,
        top: -450,
        right: -180
      }}
    />
    <Gradient
      locations={[0.6, 0.9]}
      colors={[lightPurple, darkPink]}
      style={{
        ...gradientClass,
        top: -420,
        left: -180,
        opacity: 0.6,
      }}
    />
    <Gradient
      locations={[0.5, 0.8, 1]}
      colors={[darkPink, darkPurple, primaryColor]}
      style={{
        ...gradientClass,
        top: -460,
        left: -180,
      }}
    />
      <Image
        style={[marginTop20Class, {
          marginBottom: 50
        }]}
        source={icon}
      />
      <Input
        id='email'
        name='email'
        placeholder={translate('login.email-placeholder')}
        keyboardType='email-address'
        autoCapitalize='none'
        value={values.email}
        onFocus={form.handleBlur('email')}
        onChangeText={form.handleChange('email')}
        additionalStyles={[marginTop20Class, primaryClass, errors.email && touched.email ? inputErrorClass : null]}
      />
      {
        (errors.email && touched.email) ? 
          (<Text text={errors.email} type='error' additionalStyles={[fontColorErrorClass]} />) 
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
        additionalStyles={[marginTop20Class, primaryClass, errors.password && touched.password ? inputErrorClass : null]}
      />
      {
        (errors.password && touched.password) ? 
          (<Text text={errors.password} type='error' additionalStyles={[fontColorErrorClass]}/>) 
          : null
      }
      <Text
        additionalStyles={[marginTop20Class, primaryClass]}
        text={translate('login.forget-pass')}
      />
      <Text
        type='link'
        text={translate('login.forget-pass-action')}
        additionalStyles={[lightPurpleColorClass]}
        onPress={() => onNavigate('Recover')}
      />
      <Button
        title={translate('login.action')}
        onPress={handleSubmit}
        additionalStyles={[marginTop20Class]}
        buttonStyle={primaryClass}
        textStyle={primaryTextClass}
        colors={[purple, primaryColor]}
      />
      <Text
        additionalStyles={[marginTop20Class, primaryClass]}
        text={translate('login.not-account')}/>
      <Text 
        type='link'
        additionalStyles={[lightPurpleColorClass]}
        text={translate('login.not-account-action')}
        onPress={() => onNavigate('Signup')}  
      />
    </Container>
  )
}

export default LoginView
