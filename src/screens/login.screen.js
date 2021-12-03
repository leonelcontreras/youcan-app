import React from 'react'
import { useForm } from '../hooks'
import { loginSchema } from '../schemas'
import { LoginView } from '../views'

const LoginScreen = () => {
  const handleOnSubmit = values => console.log('values --->', values)

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleOnSubmit
  })

  return <LoginView form={form}/>
}

export default LoginScreen
