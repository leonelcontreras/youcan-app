import React from 'react'
import { useTheme, useTranslate } from '../hooks'
import { Text, Input, Button, Container } from '../components'

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
    secundaryColor,
    pink,
    darkPink,
    purple,
    darkPurple,
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

  return (
    <Container>
      <Input
        id='email'
        name='email'
        placeholder={translate('login.email-placeholder')}
        value={values.email}
        onFocus={handleBlur('email')}
        onChangeText={handleChange('email')}
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
