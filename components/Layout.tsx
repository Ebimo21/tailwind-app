import * as React from 'react'
import Header from './Header'

interface props {
  children : React.ReactNode
}

const Layout = ({children}:props) => {
  return (
    <>
    <Header></Header>
    {children}
    </>
  )
}

export default Layout