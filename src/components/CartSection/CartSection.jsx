import React from 'react'
import { BsCartCheck } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"
import { GrLocation } from "react-icons/gr"
import "./CartSection.css"
import { Button } from '../Button/Button'
const CartSection = () => {
  return (
    <section className='cart-section'>
        <div className="header">
            <h1>Cart</h1>
            <BsCartCheck  size={35}/>
        </div>
          <div className="product-list no-product">
              <span>What's stopping you, designer?</span>
        </div>
        <div className="footer">
              <div className="button-area">
                  <div className="button">
                      <GrLocation />
                    <span>Home</span>
                  </div>
                  <div className="button">
                      <MdDateRange />
                    <span>Select date</span>
                  </div>
            </div>
            <div className="order-now">
                <Button type='primary' label='Order Now'/>
            </div>
        </div>
    </section>
  )
}

export { CartSection }