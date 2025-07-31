import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import Alldata from './Alldata'
import { FiArrowLeft } from "react-icons/fi";
const ProductDetails = (info) => {
  const {id} = useParams()
  
  let Product;
  for(let i=0;i<Alldata.length;i++){
    if(Alldata[i].id==id){
      Product=Alldata[i];
      break
    }
  }
  const [num , setnum] = useState(1);
  function handleNumChange(event){
    setnum(event.target.value);
  }
  return (
    <div className='mb-10 rounded flex flex-col md:flex-row p-2 w-[80vw] m-auto mt-10  md:p-10 shadow-2xl'>
      <Link to={"/"}><FiArrowLeft className='w-7 h-7 mt-[-35px]' /></Link>
        <img className='md:w-[35vw] md:h-[65vh] object-contain' src={Product.img} alt="Image" />
        
        <div className='flex flex-col ml-1 gap-3 md:ml-10'>
            <h1 className='text-3xl not-[]:md:text-5xl font-bold'>{Product.title}</h1>
            <p className='text-2xl md:text-3xl font-bold'>${Product.price}</p>
            <p className='text-gray-600 md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deserunt explicabo pariatur eius unde dolores commodi laudantium. Officia ipsum temporibus ratione similique, ut maiores neque aspernatur itaque expedita vel quisquam?</p>
            <div className=' flex justify-center md:justify-start'>
                <input className='shadow w-10 h-10 text-center mr-5 ' type="text" value={num} onChange={handleNumChange} />
                <Link to={`/productDetails/${id}/Cart`} className='bg-orange-500  rounded w-35 pt-2 pb-2 pl-7 mb-2  text-white hover:bg-orange-00'>Add To Cart </Link>
            </div>
            
        </div>

      
    </div>
  )
}

export default ProductDetails
