import React, { useState } from 'react'

import { ChangeEvent } from 'react'
import { Button } from '../../atoms'
import { InputGroup } from '../../molecules'

import './index.scss'
import { ValidateEmail, ValidatePasswordLength } from '../../../helpers/validator'

type RegisterFormProps = {
  handleRegister: (userData: UserData, e: React.MouseEvent<HTMLButtonElement>) => void
}

export type UserData = {
  name: string;
  email: string;
  password: string;
}

const index = ({handleRegister}: RegisterFormProps) => {
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    name: ''
  })

  const [ errors, setErrors ] = useState<UserData>({
    email: '',
    password: '',
    name: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleErrorOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      [e.target.name]: ''
    })

    if (userData.name === '' && e.target.name === 'name') {
      setErrors({
        ...errors,
        name: 'Please fill in your name'
      })
    }

    if (userData.email === '' && e.target.name === 'email') {
      setErrors({
        ...errors,
        email: 'Please fill in your email'
      })
    }

    if (userData.email && !ValidateEmail(userData.email)) {
      setErrors({
        ...errors,
        email: 'Please input a valid email'
      })
    }
    
    if (userData.password === '' && e.target.name === 'password') {
      setErrors({
        ...errors,
        password: 'Please fill in your password'
      })
    }

    if (userData.password && !ValidatePasswordLength(userData.password, 8, 16)) {
      setErrors({
        ...errors,
        password: 'Please input a valid password between 8 and 16 characters long'
      })
    }
  }

  const handleErrorOnSubmit = (): boolean => {
    let errorData = {
      email: '',
      password: '',
      name: ''
    }

    if (userData.email === '') {
      errorData = {
        ...errorData,
        email: 'Please fill in your email'
      }
    } 
    
    if (userData.password === '') {
      errorData = {
        ...errorData,
        password: 'Please fill in your password'
      }
    }

    if (userData.email && !ValidateEmail(userData.email)) {
      errorData = {
        ...errorData,
        email: 'Please input a valid email'
      }
    }

    if (userData.password && !ValidatePasswordLength(userData.password, 8, 16)) {
      errorData = {
        ...errorData,
        password: 'Please input a valid password between 8 and 16 characters long'
      }
    }

    if (userData.name === '') {
      errorData = {
        ...errorData,
        name: 'Please fill in your name'
      }
    }

    setErrors({
      ...errors,
      email: errorData.email,
      password: errorData.password,
      name: errorData.name
    })

    if (errorData.email !== '' || errorData.password !== '' || errorData.name !== '') {
      return true
    } else {
      return false
    }
  }

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const hasErrors = handleErrorOnSubmit()

    if (errors.email === '' && errors.password === '' && errors.name === '' && !hasErrors) {
      handleRegister(userData, e)
    }
  };
  
  return (
    <div className='register-form'>
      <InputGroup
        name='name'
        label='Name'
        type='text'
        onChange={(e) => handleInput(e)}
        onBlur={handleErrorOnBlur}
        error={errors.name}
      />
      {
        <div className='error'>
          {
            errors.name
          }
        </div>
      }
      <InputGroup
        name='email'
        label='Email'
        type='email'
        error={errors.email}
        onChange={(e) => handleInput(e)}
        onBlur={handleErrorOnBlur}
      />
      <InputGroup
        name='password'
        label='Password'
        type='password'
        error={errors.password}
        onChange={(e) => handleInput(e)}
        onBlur={handleErrorOnBlur}
      />
      <Button
        className='register-form__button'
        label='REGISTER'
        size='full'
        onClick={buttonHandler}
      />
    </div>
  )
}

export default index