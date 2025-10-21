import React from 'react'

const Sections = () => {


    function wheeling(elm){
        console.log(elm.deltaY)
    }
  return (

    <div>
        <div onWheel={(el)=>{wheeling(el)}} className="section1"></div>
                <div className="section2"></div>
        <div className="section3"></div>

    </div>
  )
}

export default Sections