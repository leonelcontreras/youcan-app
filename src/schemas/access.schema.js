import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('El email que escribiste no es válido').required('Ingresa tu email'),
  password: Yup.string().min(8, 'Debe de tener al menos 8 caracteres').required('Ingresa tu contraseña')
})

export {
  loginSchema
}
