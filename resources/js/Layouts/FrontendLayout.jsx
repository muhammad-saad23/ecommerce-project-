import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { usePage } from '@inertiajs/react'


export default function FrontendLayout({children}) {
  const {categories,products}=usePage()
  return (
    <div>
    <Navbar products={products} categories={categories}/>
    <main>{children}</main>
    <Footer/>
    </div>
  )
}
