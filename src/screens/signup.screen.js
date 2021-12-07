import React from 'react'
import { SignupView } from '../views'
import { signupSchema } from '../schemas'
import { useForm, useNavigate } from '../hooks'

const SignupScreen = () => {
  const { navigate } = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema: signupSchema
  })

  const onNavigateLogin = () => navigate('Login')

  return (
    <SignupView
      form={form}
      onNavigateLogin={onNavigateLogin}
    />
  )
}

export default SignupScreen
