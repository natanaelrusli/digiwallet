import React from 'react'
import { ChangeEvent, useState } from 'react'
import Button from '../../atoms/Button'
import { InputGroup } from '../../molecules'
import './index.scss'
import { ValidateEmail, ValidatePasswordLength } from '../../../helpers/validator'

// TODO: Validate Email [DONE]
// TODO: Validate Password length

type LoginFormProps = {
  handleLogin: (loginData: LoginData) => void
}

export type LoginData = {
  email: string
  password: string
}

const index = ({ handleLogin }: LoginFormProps) => {
  const [ loginData, setLoginData ] = useState<LoginData>({
    email: '',
    password: ''
  })

  const [ errors, setErrors ] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setLoginData({
        ...loginData,
        email: e.target.value
      })
    } else if (e.target.name === 'password') {
      setLoginData({
        ...loginData,
        password: e.target.value
      })
    }
  }

  const handleErrorOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
    
    if (loginData.email === '' && e.target.name === 'email') {
      setErrors({
        ...errors,
        email: 'Please fill in your email'
      })
    } 
    
    if (loginData.password === '' && e.target.name === 'password') {
      setErrors({
        ...errors,
        password: 'Please fill in your password'
      })
    }

    if (loginData.email && !ValidateEmail(loginData.email)) {
      setErrors({
        ...errors,
        email: 'Please input a valid email'
      })
    }

    if (loginData.password && !ValidatePasswordLength(loginData.password, 8, 18)) {
      setErrors({
        ...errors,
        password: 'Please input a valid password between 8 and 18 characters long'
      })
    }
  }

  const handleErrorOnSubmit = (): boolean => {
    let errorData = {
      email: '',
      password: '',
    }

    if (loginData.email === '') {
      errorData = {
        ...errorData,
        email: 'Please fill in your email'
      }
    } 
    
    if (loginData.password === '') {
      errorData = {
        ...errorData,
        password: 'Please fill in your password'
      }
    }

    if (loginData.email && !ValidateEmail(loginData.email)) {
      errorData = {
        ...errorData,
        email: 'Please input a valid email'
      }
    }

    if (loginData.password && !ValidatePasswordLength(loginData.password, 8, 18)) {
      errorData = {
        ...errorData,
        password: 'Please input a valid password between 8 and 18 characters long'
      }
    }

    setErrors({
      ...errors,
      email: errorData.email,
      password: errorData.password
    })

    if (errorData.email !== '' || errorData.password !== '') {
      return true
    } else {
      return false
    }
  }

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const hasErrors = handleErrorOnSubmit()

    if (errors.email === '' && errors.password === '' && !hasErrors) {
      handleLogin(loginData)
    }
  };
  
  return (
    <div className='login-form'>
      <InputGroup
        name='email'
        label='Email'
        type='email'
        value={loginData.email}
        onBlur={handleErrorOnBlur}
        onChange={handleInput}
        error={errors.email}
      />
      <InputGroup
        name='password'
        label='Password'
        type='password'
        value={loginData.password}
        onBlur={handleErrorOnBlur}
        onChange={handleInput}
        error={errors.password}
      />
      <Button
        name='login-button'
        className='login-form__button'
        label='LOGIN'
        size='full'
        onClick={(buttonHandler)}
      />
    </div>
  )
}

export default index