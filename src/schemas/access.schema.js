import * as Yup from 'yup'
import i18next from 'i18next'

const loginSchema = Yup.object().shape({
  email: Yup.string().email(i18next.t('validator.email-invalid')).required(i18next.t('validator.email-required')),
  password: Yup.string().min(8, i18next.t('validator.pass-invalid')).required(i18next.t('validator.pass-required'))
})

const signupSchema = Yup.object().shape({
  email: Yup.string().email(i18next.t('validator.email-invalid')).required(i18next.t('validator.email-required')),
  password: Yup.string().min(8, i18next.t('validator.pass-invalid')).required(i18next.t('validator.pass-required')),
  repeatPassword: Yup.string().min(8, i18next.t('validator.pass-invalid')).required(i18next.t('validator.pass-required'))
})

const recoverySchema = Yup.object().shape({
  email: Yup.string().email(i18next.t('validator.email.invalid')).required(i18next.t('validator.email-required'))
})

export {
  loginSchema,
  signupSchema,
  recoverySchema
}
