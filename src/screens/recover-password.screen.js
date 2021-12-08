import React from 'react'
import { useForm, useNavigate } from '../hooks'
import { recoverySchema } from '../schemas'
import { RecoverPasswordView } from '../views'

const RecoverPasswordScreen = () => {
  const { goBack } = useNavigate()

  const form = useForm({
    initialValues: {
      email: ''
    },
    validationSchema: recoverySchema
  })

  const onBack = () => goBack()

  return <RecoverPasswordView form={form} onBack={onBack} />
}

export default RecoverPasswordScreen
