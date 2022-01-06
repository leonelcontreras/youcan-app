import React from 'react'
import { View } from 'react-native'
import { Container, Text, Input, Button, Gradient, Image, Icon } from '../components'
import { useTheme, useTranslate, useToggle } from '../hooks'
import icon from '../../assets/logo3.webp'

const LoginView = ({ form, invalidUser, onNavigate }) => {
  const translate = useTranslate()
  const { toggle, handleToggle } = useToggle()

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
    backgroundColor,
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

  const inputContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:primaryColor,
    borderRadius: 15
  }

  const input = {
    width: '85%',
    borderRadius: 0,
    borderWidth: 0,
    borderTopLeftRadius: 15,
    borderRightWidth: 0,
    borderBottomLeftRadius: 15
  }

  const iconContainer = {
    backgroundColor: backgroundColor,
    width: '15%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 7,
    display: 'flex',
    alignItems: 'center'
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
      <View style={[
        inputContainer, 
        marginTop20Class, 
        errors.password && touched.password ? inputErrorClass : null
      ]}>
        <Input
          id='password'
          name='password'
          placeholder={translate('login.pass-placeholder')}
          secureTextEntry={!toggle}
          value={values.password}
          onFocus={handleBlur('password')}
          onChangeText={handleChange('password')}
          additionalStyles={[input, primaryClass]}
        />
        <View style={iconContainer}>
          <Icon name={toggle ? 'md-eye-off' : 'md-eye'} size={32} color={primaryColor} onPress={() => handleToggle()}/>
        </View>
      </View>
      {
        (errors.password && touched.password) ? 
          (<Text text={errors.password} type='error' additionalStyles={[fontColorErrorClass]}/>) 
          : null
      }
      {
        invalidUser && <Text text='Invalid email or password' />
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
