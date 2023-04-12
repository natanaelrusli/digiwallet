import React from 'react';
import { ChangeEventHandler } from 'react';
import './index.scss'

export type InputCompProps = {
  name?:string;
  placeholder?:string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string
  prefixLeft?: string
  prefixRight?: string
  className?: string
  backgroundColor?: string
}

const index = ({
  type,
  error,
  onChange,
  value,
  placeholder,
  prefixLeft,
  prefixRight,
  className,
  backgroundColor
}: InputCompProps) => {
  return (
    <>
      <div
        className={`input-wrapper ${className !== undefined ? className : ''}`}
        style={{backgroundColor: backgroundColor}}
      >
        {
          prefixLeft &&
          <span className='prefix-left'>
            { prefixLeft }
          </span>
        }
        <input
          type={type}
          onChange={onChange}
          className='input'
          value={value}
          placeholder={placeholder}
        />
        {
          prefixRight &&
          <span className='prefix-right'>
            { prefixRight }
          </span>
        }
      </div>
      <div className='input-error'>
        { error }
      </div>
    </>
  )
}

export default index