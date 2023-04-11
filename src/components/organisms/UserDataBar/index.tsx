import { UsernameLabel, BalanceLabel } from '../../molecules'
import './index.scss'

const index = () => {
  return (
    <div className='user-data-bar'>
      <div className='user-data-bar__left'>
        <UsernameLabel />
      </div>
      <div className='user-data-bar__right'>
        <BalanceLabel />
      </div>
    </div>
  )
}

export default index