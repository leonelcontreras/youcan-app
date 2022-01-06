import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ACCESS } from '../states/action-types'
import { useForm, useNavigate } from '../hooks'
import { AuthenticationService } from '../services'
import { loginSchema } from '../schemas'
import { LoginView } from '../views'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [invalidUser, setInvalidUser] = useState(false)
  const { navigate } = useNavigate()
  const authentication = AuthenticationService()
  const { LOGIN } = ACCESS

  const handleOnSubmit = async (values) => {
    const { email, password } = values
    const response = await authentication.login(email, password)
    return (response.user)
      ? dispatch({
        type: LOGIN,
        payload: {
          user: response,
          isSigned: true
        }
      })
      : setInvalidUser(true)
  }

  const onNavigate = (screen) => navigate(screen)

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleOnSubmit
  })

  useEffect(() => {
    setTimeout(() => {
      if (invalidUser) setInvalidUser(false)
    }, 3000)
  }, [invalidUser])

  return (
    <LoginView
      form={form}
      invalidUser={invalidUser}
      onNavigate={onNavigate}
    />
  )
}

export default LoginScreen
