import React from 'react'
import './index.scss'
import { InputGroup } from '../../molecules'
import { Button } from '../../atoms'

const index = () => {
  return (
    <div className='transfer-form-wrapper'>
      <h1 className='transfer-form-header'>Transfer</h1>
      <InputGroup
        name='from'
        label='From'
      />
      <InputGroup
        label='To'
      />
      <InputGroup
        label='Amount'
      />

      <Button
        className='transfer-form-button'
        label='Send'
        size='full'
      />
    </div>
  )
}

export default index