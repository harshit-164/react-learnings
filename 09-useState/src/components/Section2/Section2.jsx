import React, { useState } from 'react'
import style from '../Section2/Section2.module.css'

const Section2 = () => {
    const [letter, setletter] = useState("")
        
            function Type(event){
                console.log(event.target.value)
    
                setletter(event.target.value)
            }

  return (
    <div className={style.Section2}>
    <div className={style.mainDiv}>
        <div className={style.container}>
        <h2 className={style.myLetter} >{letter}</h2>
        </div>
        <input type="text" onChange={Type} name="" id="" />
    </div>
    </div>
  )
}

export default Section2