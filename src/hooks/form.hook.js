import { useFormik } from 'formik'

const useForm = (config) => {
  const form = useFormik(config)

  return form
}

export default useForm
