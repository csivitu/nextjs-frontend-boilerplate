import React from 'react'
import { NavLink } from 'react-router'

const PageOne = () => {
  return (
    <>
    <div>PageOne</div>
    <NavLink to="/page-two">Go to page 2</NavLink>
    </>
    
  )
}

export default PageOne