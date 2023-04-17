import React, { useState } from 'react'

import './index.scss'

const index = () => {
  const imagePlaceholder = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList
    setCurrentImage(selectedFiles?.[0])
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]))
  }

  return (
    <div className='file-input'>
      <input type="file" name="file-input" onChange={selectImage} />
      <div className='file-input__image-container'>
        <img src={previewImage ? previewImage : imagePlaceholder} alt="image" />
      </div>
    </div>
  )
}

export default index