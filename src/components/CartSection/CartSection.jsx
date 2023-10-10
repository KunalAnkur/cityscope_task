import React from 'react'
import { BsCartCheck } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"
import { GrLocation } from "react-icons/gr"
import "./CartSection.css"
import { Button } from '../Button/Button'
import { CartProduct } from '..'
import { connect } from 'react-redux'
import {removeToCart} from "../../redux/action"
const CartSection = ({ products = [], removeToCart }) => {
  const handleOnClose = (index) => {
    removeToCart(index)
  }
  return (
    <section className='cart-section'>
        <div className="header">
            <h1>Cart</h1>
            <BsCartCheck  size={35}/>
        </div>
          <div className={`product-list ${products.length === 0 ? "no-product" : ""}`}>
        {products.length === 0 ? <span>What's stopping you, designer?</span> : products.map(product => <CartProduct key={product.id} description={product.description} imageUrl={product.mainImage} price={product.price} title={product.title} onClose={() => handleOnClose(product.id)} />) }
              
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
const mapStateToProps = (state) => {
  return {
    products: state.cart.products
  }
} 
const connectedCartSection = connect(mapStateToProps, { removeToCart })(CartSection);
export { connectedCartSection as CartSection }