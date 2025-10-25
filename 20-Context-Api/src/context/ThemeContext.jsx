import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContextData = createContext()

const ThemeContext = (props) => {
  const [theme, setTheme] = useState('light')
  
  return (
    <div>
      <ThemeContextData.Provider value={[theme, setTheme]} >
          {props.children}
      </ThemeContextData.Provider>
    </div>
  )
}

export default ThemeContext