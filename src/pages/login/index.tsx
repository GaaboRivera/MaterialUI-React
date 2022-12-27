import React from 'react'
import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from '@mui/material'
import { useNotification } from '../../context/notification.context'
import { LoginValidate } from '../../helpers/validateForm'
import { useFormik } from 'formik'
type LoginType = {
  username: string
  password: string
}
const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = useNotification()
  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    },
  })

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems={'center'}
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesion
            </Typography>
            <Box component={'form'} onSubmit={formik.handleSubmit}>
              <TextField
                name="username"
                type={'text'}
                fullWidth
                label="email"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                type={'password'}
                fullWidth
                label="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
