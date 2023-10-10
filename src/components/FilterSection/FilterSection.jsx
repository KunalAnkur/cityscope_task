import React from 'react'
import "./FilterSection.css"
import { Button, Filter } from '..'
import { FiFilter } from 'react-icons/fi'
import { connect } from 'react-redux'
import {applyFilter} from "../../redux/action"
const FilterSection = ({ applyFilter }) => {
  const handleOnClick = () => {
    applyFilter();
  }
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
        <Button onClick={handleOnClick} label='Apply' type='primary' />
          </div>
      </section>
  )
}
const connectedFilterSection = connect(null, { applyFilter })(FilterSection)
export { connectedFilterSection as FilterSection }