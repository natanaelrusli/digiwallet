import React from 'react'

import './index.scss'
import { Button } from '../../atoms'
import { InputGroup } from '../../molecules'

type Props = {
  onSubmit?: () => void
  accountNumber?: number
  width?: string
}

const index = ({
  onSubmit,
  accountNumber
}: Props) => {
  return (
    <div className='topup-form'>
      <h1 className='topup-form__header'>Top Up</h1>
        <InputGroup
          name='sof'
          label='Source of Fund'
          value={accountNumber?.toString() || ''}
        />
        <InputGroup
          name='to'
          label='To'
        />
        <InputGroup
          name='amount'
          label='Amount'
        />
        <InputGroup
          name='desc'
          label='Description'
        />

        <Button
          className='topup-form-button'
          label='Send'
          size='full'
          onClick={onSubmit}
        /> 
    </div>
  )
}

export default index