import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className=' w-screen h-[100px] shadow bg-white'>
        <div className='flex items-center max-w-6xl justify-between mx-auto px-5'>
          <img className='h-[80px] ml-2' src="https://logolook.net/wp-content/uploads/2021/03/Amazon-Logo-2000.png" alt="" />
        <Link to={`/productDetails/Cart`} className='text-center'><CiShoppingCart className='w-10 h-10 hover:text-[#ff5151] mr-5' /></Link>
        </div>
        
    </div>
  )
}

export default Navbar
