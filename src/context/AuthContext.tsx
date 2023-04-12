import React from 'react';
import { createContext, ReactNode, useState } from 'react'

type Props = {
  children?: ReactNode;
}

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void
}

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1];

const initialValue = {
  authenticated: cookieValue ? true : false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {},
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({children}: Props) => {
  const [ authenticated, setAuthenticated ] = useState(initialValue.authenticated)

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider }