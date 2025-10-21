import React from 'react'
import Sections from './components/Sections'

const App = () => {
  function onClick(){
    console.log("clicked")
  }

  function hola(){
    console.log("entered")
  }

  function inputChanging(elm){
    console.log(elm.target.value)
  }

  return (
    <div>
      <input type="text" name="" id="" onMouseEnter={hola} onChange={(el)=>inputChanging(el)} />
      <button onClick={onClick} >print</button>
      <Sections/>
    </div>

  )
}

export default App