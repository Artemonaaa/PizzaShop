'use client'

import { useContext } from 'react'

import CartTop from './CartTop'
import { CartContext } from '../context/CartContext'


const CartMobile = () => {
  const { isOpen } = useContext(CartContext)
  return (
    <div className={`${isOpen ? "bottom-0" : "-bottom-full"} bg-white fixed 
      w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}
    >
      <CartTop />
    </div>
  )
}

export default CartMobile;
