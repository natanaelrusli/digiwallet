import { ReactNode } from "react"
import Navbar from "../molecules/Navbar"

import './Layout.scss'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__content">
        { children }
      </div>
    </div>
  )
}

export default Layout