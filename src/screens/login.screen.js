import React from 'react'
import { useForm, useNavigate } from '../hooks'
import { loginSchema } from '../schemas'
import { LoginView } from '../views'

const LoginScreen = () => {
  const { navigate } = useNavigate()

  const handleOnSubmit = values => console.log('values --->', values)
  const onSignup = () => navigate('Signup')

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleOnSubmit
  })

  return <LoginView form={form} onSignup={onSignup} />
}

export default LoginScreen
