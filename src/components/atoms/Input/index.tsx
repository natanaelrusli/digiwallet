import { ChangeEventHandler } from 'react';
import './index.scss'

export type InputCompProps = {
  name?:string;
  placeholder?:string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string
}

const index = ({ type, error, onChange, value, placeholder }: InputCompProps) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        className='input'
        value={value}
        placeholder={placeholder}
      />
      <div className='input-error'>
        { error }
      </div>
    </>
  )
}

export default index