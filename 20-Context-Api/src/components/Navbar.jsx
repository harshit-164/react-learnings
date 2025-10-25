import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Navbar = () => {
    const [theme] = useContext(ThemeContextData)

    
  return (
    <div id={theme} >
        Sheriyans
        <Nav2 />
    </div>
  )
}

export default Navbar