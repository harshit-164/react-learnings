import React from 'react'
import { ThemeContextData } from '../context/ThemeContext'
import { useContext } from 'react'

const Nav2 = () => {

    const [theme] = useContext(ThemeContextData)
    console.log(theme);
    
  return (
    <div id='nav2'>
        <div>Home</div>
        <div>Contact</div>
        <div>Courses</div>
        <div>Products</div> 
        <div> {theme} </div>
    </div>
  )
}

export default Nav2