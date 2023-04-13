import React, { useState } from 'react'

import { ChangeEvent } from 'react'
import { Button } from '../../atoms'
import { InputGroup } from '../../molecules'

import './index.scss'

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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div className='register-form'>
      <InputGroup
        name='name'
        label='Name'
        type='text'
        onChange={(e) => handleInput(e)}
      />
      <InputGroup
        name='email'
        label='Email'
        type='email'
        onChange={(e) => handleInput(e)}
      />
      <InputGroup
        name='password'
        label='Password'
        type='password'
        onChange={(e) => handleInput(e)}
      />
      <Button
        className='register-form__button'
        label='REGISTER'
        size='full'
        onClick={(e) => handleRegister(userData, e)}
      />
    </div>
  )
}

export default index