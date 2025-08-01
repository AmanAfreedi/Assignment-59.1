import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllProducts from './components/AllProducts'
import { Route , Routes } from 'react-router'
import ProductDetails from "./components/ProductDetails"

import CartPage from './components/CartPage'
const App = () => {
  return (
    <div className='bg-gray-100 overflow-x-hidden h-screen flex flex-col'>
      <Navbar className="fixed"/>
      <div className='grow'>
        <Routes>
        <Route path='/' element={<AllProducts />}/>
        <Route path='/productDetails/:id' element={<ProductDetails />}/>
        <Route path='/productDetails/:id/Cart' element={<CartPage/>}/>
        <Route path='/productDetails/Cart' element={<CartPage/>}/>
      </Routes>
     
      </div>
      <Footer />
    </div>
  )
}

export default App
