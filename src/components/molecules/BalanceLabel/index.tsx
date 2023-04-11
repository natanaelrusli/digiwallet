import { Label } from '../../atoms'
import './index.scss'

const index = () => {
  return (
    <div className='balance-label'>
      <Label
        text={`Balance:`}
        fontSize='1.3rem'
        fontWeight='light'
        className='balance-label__top'
      />
      <Label
        text={`IDR 13.750.000,00`}
        fontSize='2.2rem'
        fontWeight='500'
        className='balance-label__bottom'
      />
    </div>
  )
}

export default index