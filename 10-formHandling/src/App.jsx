import React from 'react'

const App = () => {
  const btnClicked = (e)=>{
    console.log("Form Submitted!")
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input type="text" name="" id=""  />
        <button onClick={(e)=>{
          btnClicked(e)
        }} >Submit</button>
      </form>
    </div>
  )
}

export default App