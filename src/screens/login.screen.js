import React from 'react'
import { useForm, useNavigate } from '../hooks'
import { loginSchema } from '../schemas'
import { LoginView } from '../views'

const LoginScreen = () => {
  const { navigate } = useNavigate()

  const handleOnSubmit = values => console.log('values --->', values)
  const onNavigate = (screen) => navigate(screen)

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleOnSubmit
  })

  return <LoginView form={form} onNavigate={onNavigate} />
}

export default LoginScreen
