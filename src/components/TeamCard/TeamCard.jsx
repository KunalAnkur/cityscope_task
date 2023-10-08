import React from 'react'
import "./TeamCard.css"
import { Link } from '../'
const TeamCard = ({ imageSource = "", name = "", designation = "", links = [] }) => {
    return (
        <div className='team-card'>
            <img className='team-photo' src={imageSource} alt={name}></img>
            <div className='team-details'>
                <h3>{name}</h3>
                <h4>{designation}</h4>
                <div  className="links">
                    {links.map((link, index) =>
                        <Link key={index} to={link.socialUrl}>
                            <img className='social-link' src={link.imageSource} alt={link.name} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export { TeamCard }