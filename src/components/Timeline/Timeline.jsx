import React from 'react'
import "./Timeline.css"
import { TimelineContent } from '../'
const Timeline = ({timelines = []}) => {
  return (
      <ul className="timeline">
          {timelines.map((timeline, index) => <TimelineContent key={index} title={timeline.title} description={timeline.description} />)}
      </ul>
  )
}

export { Timeline }