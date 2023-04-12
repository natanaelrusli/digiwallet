import React, { useState } from 'react'

import './index.scss'

export type DatepickerProps = {
  name?: string;
  className?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const index = ({
  name,
  className,
  onChange,
  placeholder
}: DatepickerProps) => {
  const [type, setType] = useState<'text' | 'date'>('text')

  return (
    <div className={`datepicker-wrapper ${className ? className : ''}`}>
      <input
        name={name}
        className='datepicker'
        type={type}
        placeholder={placeholder}
        onBlur={() => {
          setType('text')
        }}
        onFocus={() => setType('date')}
        onChange={onChange}
      />
    </div>
  )
}

export default index