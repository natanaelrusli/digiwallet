import React from 'react'

import './index.scss'

type Props = {
  children: JSX.Element | JSX.Element[]
  marginTop?: string
  marginBottom?: string
  marginRight?: string
  marginLeft?: string
  width?: string
}

const index = ({
  children,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  width
}: Props) => {
  return (
    <div 
      className='card'
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
        width: width
      }}
    >
      { children }
    </div>
  )
}

export default index