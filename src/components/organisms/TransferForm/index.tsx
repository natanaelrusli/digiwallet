import React, { useState } from 'react'
import './index.scss'
import { InputGroup } from '../../molecules'
import { Button } from '../../atoms'

type TransferForm = {
  onSubmit: (to: number, amount: number, desc: string) => void
  accountNumber?: number
}

const index = ({
  onSubmit,
  accountNumber
}: TransferForm) => {
  const [to, setTo] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [desc, setDesc] = useState<string>('')

  const handleSubmit = () => {
    onSubmit(
      to,
      amount,
      desc
    )
  }

  return (
    <div className='transfer-form-wrapper'>
      <h1 className='transfer-form-header'>Transfer</h1>
      
      <InputGroup
        name='from'
        label='From'
        disabled={true}
        value={accountNumber?.toString()}
      />
      <InputGroup
        name='to'
        label='To'
        onChange={(e) => setTo(parseInt(e.target.value))}
      />
      <InputGroup
        name='amount'
        label='Amount'
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <InputGroup
        name='desc'
        label='Description'
        onChange={(e) => setDesc(e.target.value)}
      />

      <Button
        className='transfer-form-button'
        label='Send'
        size='full'
        onClick={handleSubmit}        
      />
    </div>
  )
}

export default index