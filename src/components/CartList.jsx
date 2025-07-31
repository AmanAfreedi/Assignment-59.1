import React, { useState, useEffect } from 'react'
import CartRow from './CartRow'
import Alldata from './Alldata';
import cart from './cart';
const CartList = (props) => {
    
    for(let i=0;i<Alldata.length;i++){
        if(props.ID==Alldata[i].id){
            cart.push(Alldata[i]);
            break;
        }
    }
    console.log(cart)

    return (
        <div>
            {cart.map(function (product , index) {
                
                    return <CartRow title={product.title} price={product.price} img={product.img} />
                
                
            })}
        </div>
    )
}

export default CartList
