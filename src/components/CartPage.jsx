import React from 'react'
import { Link, useParams } from 'react-router'
import CartList from './CartList'
import { FiArrowLeft } from "react-icons/fi";
const CartPage = () => {
    const { id } = useParams()

    return (
        <>  
            <Link to={`/productDetails/${id}`}><FiArrowLeft className='w-7 h-7 ml-[15vw] mt-[1vh] justify-self-start' /></Link>
            <div className='flex flex-col items-center w-screen'>
                
                <div className='flex gap-2 border-[0.5px] border-gray-300 bg-gray-200 h-13 mt-5 w-[70%] items-center'>
                    <p className='pl-[16%] pr-[38%]'>Products</p>
                    <p className='pr-[6%]'>Price</p>
                    <p className='pr-[8%]'>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CartList ID={id} />
                </div>
            </div>


        </>
    )
}

export default CartPage
