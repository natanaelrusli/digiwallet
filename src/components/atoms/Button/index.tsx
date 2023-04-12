import React from 'react'
import './index.scss'

type ButtonProps = {
  name?: string
  label: string
  size?: 'small' | 'medium' | 'large' | 'full'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const buttonSize = (size?: string): string => {
  return size? size : 'medium'
}

const index = ({ name, className, label, size }: ButtonProps) => {
  return (
    <div className={className}>
      <button name={name} className={`button ${buttonSize(size)}`}>
        { label }
      </button>
    </div>
  )
}

export default index