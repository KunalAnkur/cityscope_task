import React from 'react'
import "./Filter.css"
import { Checkbox } from '../';
const Filter = ({ title = "" }) => {
    const filterDetails = {
        cost: [
            "Rs. 1500-4000",
            "Rs. 4001-7000",
            "Rs. 7001+"
        ],
        ranges: [
            {
                low: 1500,
                high: 4000
            },
            {
                low: 4001,
                high: 7000
            },
            {
                low: 7001,
                high: Infinity
            },
        ],
        colour: ["red", "blue", "yellow", "green", "orange"],
        "design templates": ["2", "3", "3+"],
        type: ["Loafers", "Sneakers"]
    }
    console.log(title, filterDetails[title.toLowerCase()])
    return (
        <div className="filter">
            <h1>{title}</h1>
            <div className={`${title.toLowerCase()} filter-items`}>
                {title.toLowerCase() !== "colour" ? filterDetails[title.toLowerCase()].map((data, id) => <Checkbox label={data} key={id} />) : filterDetails[title.toLowerCase()].map((color, id) => <div key={id} className='colour-box' style={{ background: color }}></div>)}
            </div>
        </div>
    )
}

export { Filter }