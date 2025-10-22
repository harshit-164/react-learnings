import React, { useState } from 'react'

const App = () => {

  const [val, setVal] = useState("")
  
  const twoWayBinding = (Element)=>{
    setVal(Element.target.value)
  }

  const btnClicked = (e)=>{
    console.log("Form Submitted!", val )
    e.preventDefault()
    setVal("")
    }

  // const typing = (el)=>{
  //   console.log(el.target.value)
  // }

  return (
    <div>
      <form>
        <input 
        type="text" 
        name="" 
        id=""
        value={val}
        onChange={(Element) => {twoWayBinding(Element)}}
          
        />
        <button onClick={(e)=>{
          btnClicked(e)
        }} >Submit</button>
      </form>
    </div>
  )
}

export default App