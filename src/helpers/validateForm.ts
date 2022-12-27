import * as yup from 'yup'

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required('El username es requerido'),
  password: yup
    .string()
    .trim()
    .required('El password es requerido')
    .min(6, 'Password should be of minimum 8 characters length'),
})
