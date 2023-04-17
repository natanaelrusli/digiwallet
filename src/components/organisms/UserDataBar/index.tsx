import React from 'react'

import { UsernameLabel, BalanceLabel } from '../../molecules'
import './index.scss'

type UserData = {
  Username: string;
  AccountNumber: string;
  Balance: number;
}

type UserDataBarProps = {
  data: UserData
}

const index = ({data}: UserDataBarProps) => {
  return (
    <div className='user-data-bar'>
      <div className='user-data-bar__left'>
        <UsernameLabel
          Name={data.Username}
          AccountNumber={data.AccountNumber}
        />
      </div>
      <div className='user-data-bar__right'>
        <BalanceLabel
          balance={data.Balance || 0}
        />
      </div>
    </div>
  )
}

export default index