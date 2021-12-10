import React from 'react'
import { useTheme, useTranslate } from '../hooks'
import { Text, Input, Button, Container, Gradient, Image } from '../components'
import icon from '../../assets/logo3.webp'

const RecoverPasswordView = ({ form, onBack }) => {
  const translate = useTranslate()
  const {
    fontColorErrorClass,
    primaryClass,
    primaryTextClass,
    secoundaryButtonClass,
    inputErrorClass,
    marginTop20Class,
    primaryColor,
    darkPink,
    purple,
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
        colors={[darkPink, primaryColor]}
        style={{
          ...gradientClass,
          top: -440,
          left: -20,
          borderRadius: 200
        }}
      />
      <Gradient
        locations={[0, 0.3]}
        colors={[darkPink, primaryColor]}
        style={{
          ...gradientClass,
          bottom: -440,
          right: -20,
          borderRadius: 200
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
        value={values.email}
        onFocus={handleBlur('email')}
        onChangeText={handleChange('email')}
        keyboardType='email-address'
        autoCapitalize='none'
        additionalStyles={[marginTop20Class, primaryClass, errors.email && touched.email ? inputErrorClass : null]}
      />
      {
        (errors.email && touched.email) ?
          (<Text text={errors.email} type='error' additionalStyles={[fontColorErrorClass]} />)
          : null
      }
      <Button 
        title={translate('recovery.action')}
        colors={[purple, primaryColor]}
        onPress={handleSubmit}
        additionalStyles={[marginTop20Class]}
        buttonStyle={primaryClass}
        textStyle={primaryTextClass}
      />
      <Button 
        title={translate('recovery.secondary-action')}
        colors={[purple, darkPink]}
        onPress={onBack}
        additionalStyles={[marginTop20Class]}
        buttonStyle={secoundaryButtonClass}
        textStyle={primaryTextClass}
      />
    </Container>
  )

}

export default RecoverPasswordView
