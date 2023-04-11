import { ChangeEvent } from 'react'
import { Button } from '../../atoms'
import { InputGroup } from '../../molecules'

import './index.scss'

const index = () => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  
  return (
    <div className='register-form'>
      <InputGroup
        name='name'
        label='Name'
        type='text'
        onChange={handleInput}
      />
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
        className='register-form__button'
        label='REGISTER'
        size='full'
      />
    </div>
  )
}

export default index