import React, { useState, useEffect} from 'react'

import Image from 'next/image';

import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isCheked, setIsChecked] = useState(false)

  console.log(isCheked)

  const handleCheckBox = () => {
    setIsChecked(prev => !prev)
  }

  const handleTopping = () => {
    if (isCheked) {
      const newToppings = new Set([...additionalTopping, {...topping}])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      const newToppings = additionalTopping.filter(toppingObj => {
        return toppingObj.name !== topping.name
      })
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isCheked])

  return (
    <div className={`${
      isCheked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center
      justify-center border rounded-mb bg-white relative`}
    >
      <Image 
        src={topping.image} 
        width={70} 
        height={70} 
        alt=""
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium">{topping.name}</div>
      <input 
        type="checkbox" 
        checked={isCheked}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={handleCheckBox}
      />
      <div className={`${isCheked ? "opacity-100" : "opacity-0"} 
        absolute top-1 right-1`}>
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  )
};

export default React.memo(Topping)
