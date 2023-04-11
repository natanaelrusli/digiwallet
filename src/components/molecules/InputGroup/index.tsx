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
}

const index = ({ name, placeholder, value, onChange, type, error, label, className }: InputGroupProps) => {
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
          type={type}
          value={value}
        />
    </div>
  )
}

export default index