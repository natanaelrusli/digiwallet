import React from "react"
import { ReactNode } from "react"

import './AuthLayout.scss'
import { AuthNavbar } from "../molecules"

type AuthLayoutProps = {
  children: ReactNode
  image?: string
}

const AuthLayout = ({ children, image }: AuthLayoutProps) => {
  return (
    <>
      <AuthNavbar />
      <div className="auth-layout">
        <div className="auth-layout__content">
          <div className="auth-layout__left">
            <div className="left_container">
              { children }
            </div>
          </div>
          <div className="auth-layout__right">
            {
              image &&
              <img src={image} alt="auth image" />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout