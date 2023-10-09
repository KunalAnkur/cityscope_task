import React from 'react'
import "./FilterSection.css"
import { Button, Filter } from '..'
import { FiFilter } from 'react-icons/fi'
const FilterSection = () => {
  return (
      <section className='filter-section'>
        <div className="header">
            <h1>Filter</h1>
            <FiFilter size={35}/>
        </div> 
          <Filter title='Cost'/>
          <Filter title='Colour' />
          <Filter title='Design templates' />
          <Filter title='Type' />
          <div className="apply-button">
              <Button label='Apply' type='primary' />
          </div>
      </section>
  )
}

export { FilterSection }