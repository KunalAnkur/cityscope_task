import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({to="" ,children}) => {
  return (
      <RouterLink to={to} style={{ textDecoration: 'none', color: "black" }}>
        {children}
      </RouterLink>
  )
}

export { Link }