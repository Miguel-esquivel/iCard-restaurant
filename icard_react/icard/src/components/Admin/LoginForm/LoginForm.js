import React from 'react'
import { Button, Form, Segment } from "semantic-ui-react"
import './LoginForm.scss'

export function LoginForm() {
  return (
    <div className="login-wrapper">
      <Segment className="login-card">
        <Form className="login-form-admin">
          <Form.Input
            icon="user"
            iconPosition="left"
            name="email"
            placeholder="Correo electrónico"
            fluid
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            name="password"
            type="password"
            placeholder="Contraseña"
            fluid
          />

          <Button
            type="submit"
            content="Iniciar sesión"
            primary
            fluid
          />

        </Form>
      </Segment>

    </div>
  )
}