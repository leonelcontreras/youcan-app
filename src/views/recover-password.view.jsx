import React from 'react'
import { useTheme, useTranslate } from '../hooks'
import { Text, Input, Button, Container } from '../components'

const RecoverPasswordView = ({ form, onBack }) => {
  const translate = useTranslate()
  const {
    primaryColor,
    fontColor,
    fontColorError,
    primaryButton,
    secoundaryButton,
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
        text={translate('recovery.title')}
        additionalStyles={[fontColor]}
      />
      <Text
        text={translate('recovery.subtitle')}
        additionalStyles={[marginTop20, fontColor]}
      />
      <Input
        id='email'
        name='email'
        placeholder={translate('login.email-placeholder')}
        value={values.email}
        onFocus={handleBlur('email')}
        onChangeText={handleChange('email')}
        additionalStyles={[marginTop20, fontColor, errors.email && touched.email ? inputError : null]}
      />
      {
        (errors.email && touched.email) ?
          (<Text text={errors.email} type='error' additionalStyles={[fontColorError]} />)
          : null
      }
      <Button 
        title={translate('recovery.action')}
        onPress={handleSubmit}
        additionalStyles={[marginTop20]}
        buttonStyle={primaryButton}
        textStyle={primaryText}
      />
      <Button 
        title={translate('recovery.secondary-action')}
        onPress={onBack}
        additionalStyles={[marginTop20]}
        buttonStyle={secoundaryButton}
        textStyle={primaryColor}
      />
    </Container>
  )

}

export default RecoverPasswordView
