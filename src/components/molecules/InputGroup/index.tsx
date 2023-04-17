import React from 'react';
import { ChangeEventHandler } from 'react';
import { Input, Label } from '../../atoms'
import './index.scss'

type InputGroupProps = {
  name?:string;
  placeholder?:string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string
  label: string
  className?: string
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const index = ({
  name,
  placeholder,
  value,
  onChange,
  type,
  error,
  label,
  className,
  onBlur,
  disabled,
}: InputGroupProps) => {
  return (
    <div className= {`input-group ${className}`}>
      <Label
        className='input-group__label'
        text={label}
        fontSize='large'
      />
      <Input
          name={name}
          error={error}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          value={value}
          disabled={disabled}
        />
    </div>
  )
}

export default index