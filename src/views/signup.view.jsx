import React from 'react'
import { Container, Input, Button, Text, Gradient, Image } from '../components'
import { useTranslate, useTheme } from '../hooks'
import icon from '../../assets/logo3.webp'

const SignUpView = ({ form, onNavigateLogin }) => {
  const translate = useTranslate()
  const {
    primaryColorClass,
    lightPurpleColorClass,
    fontColorErrorClass,
    primaryClass,
    primaryTextClass,
    inputErrorClass,
    marginTop20Class,
    primaryColor,
    pink,
    darkPink,
    purple,
    lightPurple
  } = useTheme()

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = form

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
        top: -420,
        right: -180
      }}
    />
    <Gradient
      locations={[0.1, 0.5]}
      colors={[lightPurple, primaryColor]}
      style={{
        ...gradientClass,
        bottom: -380,
        left: -160
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
          (<Text text={errors.password} type='error' additionalStyles={[fontColorErrorClass]} />)
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
        additionalStyles={[marginTop20Class, primaryClass, errors.repeatPassword && touched.repeatPassword ? inputErrorClass : null]}
      />
      {
        (errors.repeatPassword && touched.repeatPassword) ?
          (<Text text={errors.repeatPassword} type='error' additionalStyles={[fontColorErrorClass]} />)
          : null
      }
      <Button
        title={translate('signup.action')}
        onPress={handleSubmit}
        additionalStyles={[marginTop20Class]}
        buttonStyle={primaryClass}
        textStyle={primaryTextClass}
        colors={[purple, primaryColor]}
      />
      <Text
        text={translate('signup.already-account')}
        additionalStyles={[marginTop20Class, primaryColorClass]}
      />
      <Text
        type='link'
        additionalStyles={[lightPurpleColorClass]}
        text={translate('signup.login')}
        onPress={() => onNavigateLogin()}
      />
    </Container>
  )
}

export default SignUpView
