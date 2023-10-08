import React from 'react'
import "./Journey.css"
import { Timeline } from '../../components'
import {journeyData} from "../../data"
const Journey = () => {
  return (
    <div className='journey-page'>
      <div className="banner">
        <h1>THE JOURNEY</h1>
        <div className="banner-fadeBottom"></div>
      </div>
      <Timeline timelines={journeyData}/>
    </div>
  )
}

export { Journey }