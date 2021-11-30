import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginView } from '../views'
import { ACCESS } from '../states/action-types'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const login = () => dispatch({type: ACCESS.LOGIN, payload: {
    loading: false,
    isSigned: true,
    token: 'Bearer token'
  }})

  return (
   <LoginView onSubmit={login}/>
  )
}

export default LoginScreen
