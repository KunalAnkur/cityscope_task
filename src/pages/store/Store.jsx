import React from 'react'
import "./Store.css"
import { FilterSection, ProductCard, CartSection } from '../../components'

const Store = () => {
  return (
    <main className='store-page'>
      <FilterSection />
      <section className='shoes'>
        <div className="header">
          <h2>SHOES</h2>
        </div>
        <div className="product-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <CartSection />
    </main>
  )
}

export { Store }