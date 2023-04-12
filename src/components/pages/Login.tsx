import React from 'react'
import { ChangeEvent } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { LoginForm } from '../organisms'

import LoginImage from '../../assets/login_image.png'

const Login = () => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const loginHandler = () => {
    console.log('loginHandler')
  }

  return (
    <>
      <AuthLayout
        image={LoginImage}
      >
        <LoginForm
          handleLogin={loginHandler}
        />
      </AuthLayout>
    </>
  )
}

export default Login