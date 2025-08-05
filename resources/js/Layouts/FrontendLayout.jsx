import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function FrontendLayout({children}) {
  return (
    <div>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </div>
  )
}
