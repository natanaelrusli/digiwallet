import React, { useState } from 'react'

import './index.scss'

const index = () => {
  const imagePlaceholder = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const handleAddImage = () => {
    console.log(selectedImages.length)
    setSelectedImages([...selectedImages, 'new'])
  }

  return (
    <div className='upload-images'>
      {
        selectedImages?.map((val) => (
          <img key={val} src={imagePlaceholder} alt="Placeholder" onClick={handleAddImage} />
        ))
      }

      {
        selectedImages.length <= 2 &&
        <button onClick={handleAddImage}>ADD</button>
      }
    </div>
  )
}



export default index