import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  useEffect(() => {
   console.log("Mai useEffect hu!")
  }, [num1])
  

  return (
    <div>
      <h3>num1 {num1} </h3>
      <h3>num2 {num2} </h3>
      <button
      onMouseEnter={()=>{
        setNum1(num1+1)
      }}

      onMouseLeave={()=>{
        setNum2(num2-1)
      }}
      
      >Hover me!</button>
    </div>
  )
}

export default App