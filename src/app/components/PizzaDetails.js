import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import SizeSelection from './SizeSelection'
import CrustSelection from './CrustSelection'
import Topping from './Topping'

const PizzaDetails = ({ pizza, modal, setModal }) => {
  const [size, setSize] = useState("")
  const [crust, setCrust] = useState("")
  const [additionalTopping, setAdditionalTopping] = useState("")
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState("")
  const [price, setPrice] = useState(0)
  

  return (
    <div></div>
  )
};

export default PizzaDetails;
