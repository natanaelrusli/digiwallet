import React from 'react'
import './index.scss'

type LabelProps = {
  text: string
  fontSize?: string
  fontWeight?: 'bold' | 'normal' | 'light' | string
  className?: string
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
}

const getFontWeight = (weight: string): string => {
  if (weight === 'bold') {
    return '800'
  } else if (weight === 'light') {
    return '400'
  } else if (weight === 'normal') {
    return '600'
  } else {
    return weight
  }
}

const index = ({ className, text, fontSize, fontWeight, align }: LabelProps) => {
  return (
    <div className={className}>
      <label
        className='header-label' 
        style={{
          fontSize: fontSize? fontSize : '2rem',
          fontWeight: getFontWeight(fontWeight?fontWeight : 'normal'),
          textAlign: align? align : 'start',
          width: '100%',
        }}
      >
        { text }
      </label>
    </div>
  )
}

export default index