import React from 'react'
import "./Product.css"
import { CartSection, ProductDetailSection } from '../../components';


const Product = () => {
  return (
    <main className='product-page'>
          <ProductDetailSection />
          <CartSection />
    </main>
  )
}

export { Product }