import React, { useState, useEffect } from 'react'
import CartRow from './CartRow'
import Alldata from './Alldata';
import cart from './cart';
import { getProduct } from './Api';
import { useParams } from 'react-router';
const CartList = (props) => {
  const { id } = useParams()

  const [Product, setproduct] = useState({})
  useEffect(function () {
    if (id) {
      getProduct(parseInt(id)).then((item) => {
        setproduct(item)
        
        cart.push(item)
      })
    }
  }, [id])
  
  console.log(cart)
  return (
    <div>
      {cart.map(function (product) {
        return <CartRow title={product.title} price={product.price} img={product.thumbnail} />
      })}
    </div>
  )
}

export default CartList
