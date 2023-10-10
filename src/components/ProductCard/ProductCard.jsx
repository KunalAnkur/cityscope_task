import React from 'react'
import image from "../../assets/shoe.jpg"
import "./ProductCard.css"
import { StarRating } from '..'
const ProductCard = ({ title = "KSL 01", price = 2000, rating = 0, imageSource = image, ...props}) => {
  return (
      <div className='product-card' {...props}>
        <img src={imageSource} alt={title}></img>
        <div className="product-detail">
            <h4>{title}</h4>
            <div className="description">
                <p className="price">Rs. {price}/-</p>
                <StarRating disabled={true} value={rating} />
            </div>
        </div>
    </div>
  )
}

export { ProductCard }