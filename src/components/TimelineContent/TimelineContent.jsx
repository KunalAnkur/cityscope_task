import React from 'react'
import "./TimelineContent.css"
const TimelineContent = ({title = "", description = ""}) => {
  return (
      <li className='timeline-content'>
          <h3 className='title'>{title}</h3>
          <p>{description}</p>
      </li>
  )
}

export { TimelineContent }