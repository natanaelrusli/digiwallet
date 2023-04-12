import React from 'react'
import { ChangeEvent, useState } from 'react'
import Button from '../../atoms/Button'
import { InputGroup } from '../../molecules'
import './index.scss'

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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    return e
  }

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    console.log(button.name)
  };
  
  return (
    <div className='login-form'>
      <InputGroup
        name='email'
        label='Email'
        type='email'
        onChange={handleInput}
      />
      <InputGroup
        name='password'
        label='Password'
        type='password'
        onChange={handleInput}
      />
      <Button
        name='login-button'
        className='login-form__button'
        label='LOGIN'
        size='full'
        onClick={buttonHandler}
      />
    </div>
  )
}

export default index