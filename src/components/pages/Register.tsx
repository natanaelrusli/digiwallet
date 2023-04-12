import React, { useContext, useEffect } from "react"
import AuthLayout from "../layouts/AuthLayout"

import { RegisterForm } from "../organisms"

import AuthImage from '../../assets/auth_image.png'

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const Register = () => {
  const { authenticated } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  }, [])
  
  return (
    <>
      <AuthLayout
        image={AuthImage}
      >
        <RegisterForm />
      </AuthLayout>
    </>
  )
}

export default Register