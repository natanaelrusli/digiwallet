import React from 'react'
import { Label } from '../../atoms'
import './index.scss'
import { formatCurrency } from '../../../helpers/formatter'

type BalanceProps = {
  balance: number
}

const index = ({balance}: BalanceProps) => {
  return (
    <div className='balance-label'>
      <Label
        text={`Balance:`}
        fontSize='1.3rem'
        fontWeight='light'
        className='balance-label__top'
      />
      <Label
        text={formatCurrency(balance) || 'IDR 0'}
        fontSize='2.2rem'
        fontWeight='500'
        className='balance-label__bottom'
      />
    </div>
  )
}

export default index