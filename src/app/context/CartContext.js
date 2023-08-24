'use client'
import React, { useState, createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CartContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider