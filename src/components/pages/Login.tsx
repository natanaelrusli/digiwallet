import React, { useContext, useEffect } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { LoginForm } from '../organisms'

import LoginImage from '../../assets/login_image.png'
import { useCookies } from 'react-cookie';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [, setCookie] = useCookies(['token']);
  const { authenticated, setAuthenticated } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  }, [])
  
  const loginHandler = async (loginData: LoginData) => {
    try {
      const response = await fetch("http://localhost:8090/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
      })

      if (response.ok) {
        const { data } = await response.json()
        setAuthenticated(true)
        setCookie("token", data.token, { path: '/' })
        navigate('/')
      } else {
        toast.error('Login Failed')
      }
    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  return (
    <>
      <AuthLayout
        image={LoginImage}
      >
        <LoginForm
          handleLogin={loginHandler}
        />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </AuthLayout>
    </>
  )
}

export default Login