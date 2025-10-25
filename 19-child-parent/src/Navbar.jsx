import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button 
        onClick={()=>{
            props.setTheme('black')
            console.log('Theme Changed to', props.theme );
        }}
        >Change</button>
    </div>
  )
}

export default Navbar