import React from 'react'
import "./CartProduct.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const CartProduct = ({imageUrl="", title="", description="",price=0,onClose = () => {}}) => {
  return (
    <div className='cart-product'>
          <div onClick={onClose} className='close-btn'><AiOutlineCloseCircle size={20}/></div>
          <img src={imageUrl} alt="" />
        <div className="detail">
            <h3>{title}</h3>
            <h4>{description}</h4>
            <h3>Rs {price}/-</h3>
        </div>
    </div>
  )
}

export { CartProduct }