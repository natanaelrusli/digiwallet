import React, { useContext, useEffect } from "react"
import AuthLayout from "../layouts/AuthLayout"

import { RegisterForm, UserData } from "../organisms"

import AuthImage from '../../assets/auth_image.png'

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { toast } from "react-toastify"

const Register = () => {
  const { authenticated } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  }, [])

  const registerHandler = async (userData: UserData) => {
    const response = await fetch("http://localhost:8090/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })

    if (response.ok && response.status === 201) {
      navigate('/login')
      toast.success(`${userData.name} account has been created!`)
    } else {
      toast.error('Register Error')
    }
  }
  
  return (
    <>
      <AuthLayout
        image={AuthImage}
      >
        <RegisterForm
          handleRegister={registerHandler}
        />
      </AuthLayout>
    </>
  )
}

export default Register