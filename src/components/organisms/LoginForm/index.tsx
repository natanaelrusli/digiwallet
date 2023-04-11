import { ChangeEvent, useState } from 'react'
import Button from '../../atoms/Button'
import { InputGroup } from '../../molecules'
import './index.scss'

type LoginFormProps = {
  handleLogin: Function
}

type LoginData = {
  email: string
  password: string
}

const index = ({ handleLogin }: LoginFormProps) => {
  const [ loginData, setLoginData ] = useState<LoginData>({
    email: '',
    password: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
  }
  
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
        className='login-form__button'
        label='LOGIN'
        size='full'
      />
    </div>
  )
}

export default index