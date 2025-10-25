import React from 'react'
import { useContext } from 'react';
import { ThemeContextData } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeContextData)

    const ChangeTheme = ()=>{
        setTheme('dark')
        
    }


  return (
    <div>
        <button
        onClick={ChangeTheme}
        >Change Theme {theme} </button>
    </div>
  )
}

export default Button