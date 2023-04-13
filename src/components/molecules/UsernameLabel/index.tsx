import React from 'react'

import { Label } from '../../atoms'
import './index.scss'

type UsernameLabelProps = {
  Name: string
  AccountNumber: string
}

const index = ({Name, AccountNumber}: UsernameLabelProps) => {
  return (
    <div className='username-label'>
      <Label
        text={`Good Morning, ${Name}`}
        fontSize='2rem'
        fontWeight='700'
        className='username-label__name'
      />
      <Label
        text={`Account: ${AccountNumber}`}
        fontSize='1.1rem'
        fontWeight='light'
        className='username-label__account-number'
      />
    </div>
  )
}

export default index