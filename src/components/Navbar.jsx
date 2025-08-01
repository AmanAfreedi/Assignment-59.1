import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className=' w-screen h-[100px] shadow flex items-center'>
        
        <img className='h-[80px] md:ml-[150px] ml-2' src="https://logolook.net/wp-content/uploads/2021/03/Amazon-Logo-2000.png" alt="" />
        <Link to={`/productDetails/Cart`} className='ml-[60vw] text-center'><CiShoppingCart className='w-10 h-10' /> Cart</Link>
    </div>
  )
}

export default Navbar
