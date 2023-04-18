import React from 'react'

import './index.scss'
import { InputGroup } from '../../molecules'
import { Button } from '../../atoms'

const index = () => {
  return (
    <div className='input-image-modal-wrapper'>
      <div className='input-image-modal'>
        <InputGroup
          label='Image URL'
        />
        <Button 
          label='Select Image'
          size='full'
        />

        <img src="" alt="" />
      </div>
    </div>
  )
}

export default index