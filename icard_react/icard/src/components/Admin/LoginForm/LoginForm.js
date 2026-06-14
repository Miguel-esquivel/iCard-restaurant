import React from 'react'
import { Button, Form, Segment } from "semantic-ui-react"
import './LoginForm.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { loginApi } from '../../../api/user'
import { useAuth } from '../../../hooks/useAuth'

export function LoginForm() {
  const { login } = useAuth();
  //console.log(login);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue, { resetForm }) => {
  try {
    const response = await loginApi(formValue)
    const { access } = response;
    login(access);
    //console.log(access)

    resetForm()
  } catch (error) {
    console.error(error)
    toast.error("Error al iniciar sesión. Por favor, verifica tus credenciales.")
  }
}
  })

  return (
    <div className="login-wrapper">
      <Segment className="login-card">

        <Form onSubmit={formik.handleSubmit}>

          <Form.Input
            icon="user"
            iconPosition="left"
            name="email"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fluid
            error={
              formik.touched.email && formik.errors.email
                ? { content: formik.errors.email, pointing: 'below' }
                : null
            }
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fluid
            error={
              formik.touched.password && formik.errors.password
                ? { content: formik.errors.password, pointing: 'below' }
                : null
            }
          />

          <Button
            type="submit"
            primary
            fluid
          >
            Iniciar sesión
          </Button>

        </Form>

      </Segment>
    </div>
  )
}

function initialValues() {
  return {
    email: '',
    password: ''
  }
}

function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio"),

    password: Yup.string()
      .required("La contraseña es obligatoria"),
  });
}