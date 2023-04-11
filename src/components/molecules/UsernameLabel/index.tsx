import { Label } from '../../atoms'
import './index.scss'

const index = () => {
  return (
    <div className='username-label'>
      <Label
        text={`Good Morning, Asep!`}
        fontSize='2rem'
        fontWeight='700'
        className='username-label__name'
      />
      <Label
        text={`Account: 130293021`}
        fontSize='1.1rem'
        fontWeight='light'
        className='username-label__account-number'
      />
    </div>
  )
}

export default index