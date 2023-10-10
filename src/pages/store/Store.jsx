import React from 'react'
import "./Store.css"
import { FilterSection, CartSection, ProductSection } from '../../components'

const Store = () => {
  return (
    <main className='store-page'>
      <FilterSection />
      <ProductSection />
      <CartSection />
    </main>
  )
}

export { Store }