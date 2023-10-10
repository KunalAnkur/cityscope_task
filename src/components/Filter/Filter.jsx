import React, { useEffect, useState } from 'react'
import "./Filter.css"
import { Checkbox } from '../';
import { connect } from 'react-redux';
import {removeFilterByID, setFilter} from "../../redux/action"
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

const Filter = ({ title = "", setFilter, removeFilterByID }) => {
    const [checked, setChecked] = useState({});
    useEffect(() => {
        setChecked((prev) => {
            for (let index = 0; index < filterDetails[title.toLowerCase()].length; index++) 
                prev[index] = false;
            return prev;
        })
    }, [title])
    
    const handleOnSetFilter = (id) => {
        if (!checked[id]) {
            let payload = filterDetails[title.toLowerCase()][id]
            if (title.toLowerCase() === "cost") {
                payload = [filterDetails.ranges[id].low, filterDetails.ranges[id].high]
            }
            setChecked((prev) => {
                const newChecked = { ...prev }; 
                if (title.toLowerCase() === "colour")
                    Object.keys(prev).forEach(key => {
                        newChecked[key] = false;
                    });
                newChecked[id] = true; 
                return newChecked; 
            });

            setFilter(title.toLowerCase(), payload);
        } else {
            let payload = filterDetails[title.toLowerCase()][id]
            if (title.toLowerCase() === "cost") {
                console.log(filterDetails.ranges[id])
                payload = [filterDetails.ranges[id].low, filterDetails.ranges[id].high]
            }
            setChecked((prev) => {
                const newChecked = { ...prev }; 
                newChecked[id] = false; 
                return newChecked;
            });

            removeFilterByID(title.toLowerCase(), payload);
        }
    }
    return (
        <div className="filter">
            <h1>{title}</h1>
            <div className={`${title.toLowerCase()} filter-items`}>
                {title.toLowerCase() !== "colour" ? 
                    filterDetails[title.toLowerCase()].map((data, id) => <Checkbox checked={checked[id]} onChange={() => handleOnSetFilter(id)} label={data} key={id} />) : 
                    filterDetails[title.toLowerCase()].map((color, id) => <div key={id} onClick={() => handleOnSetFilter(id)} className={`colour-box ${checked[id] ? "selected" : ""}`} style={{ background: color }}></div>)}
            </div>
        </div>
    )
}

const connectedFilter = connect(null, { setFilter, removeFilterByID })(Filter)
export { connectedFilter as Filter }