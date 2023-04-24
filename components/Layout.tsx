import React from 'react'
import Navbar from './Navbar'
import TopNavbar from './home-sections/TopNavbar'

type LayoutProps = {
  children: React.ReactElement | React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
