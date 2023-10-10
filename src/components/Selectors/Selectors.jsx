import React, { useEffect, useState } from 'react'
import "./Selectors.css"
const Selectors = ({title = 'Front', selector = ["red", "blue","green"], setSelector = () => {}}) => {
    const [index, setIndex] = useState(0)
    const titleLowerCase = title.toLowerCase()

    useEffect(() => {
        setSelector((prev) => {
            const newPrev = { ...prev }
            newPrev[titleLowerCase] = selector[index]
            return newPrev
        });
    }, [index, selector, titleLowerCase, setSelector])

    const handleOnClick = (id) => {
        setIndex(id);
        console.log(id, index)
        setSelector((prev) => {
            const newPrev = {...prev}
            newPrev[titleLowerCase] = selector[index]
            return newPrev
    }   );
    }
  return (
    <div className='selectors'>
        <h4>{title}</h4>
        <div className="pattern-list">
              {selector.map((pattern,id) => titleLowerCase !== "size" ? 
                  <div key={id} onClick={() => handleOnClick(id)} className={`pattern ${titleLowerCase} ${index === id ? "selected": ""}`} style={{ background: pattern}}></div> : 
                  <div key={id} onClick={() => handleOnClick(id)} className={`pattern ${titleLowerCase} ${index === id ? "selected" : ""}`} >{pattern}</div> 
                )}
        </div>
    </div>
  )
}

export { Selectors }