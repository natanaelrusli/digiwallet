import React from 'react';
import { ChangeEventHandler } from 'react';
import './index.scss'

export type InputCompProps = {
  name?:string;
  placeholder?:string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?:ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string
  prefixLeft?: string
  prefixRight?: string
  className?: string
  backgroundColor?: string
}

const index = ({
  name,
  type,
  error,
  onChange,
  value,
  placeholder,
  prefixLeft,
  prefixRight,
  className,
  backgroundColor,
  onBlur
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
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
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