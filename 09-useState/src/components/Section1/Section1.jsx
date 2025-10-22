import React, { useState } from 'react'
import styles from '../Section1/Section1.module.css'

const Section1 = () => {
    const [num, setnum] = useState(0)
    
      function InNum(){
        setnum(num+1)
      }
    
      function DNum(){
        setnum(num-1)
      }
    
      function JNum(){
        setnum(num+5)
      }

  return (
    <div className={styles.box1}>
      <div id={styles.count}>
        <h2>{num}</h2>
        <button onClick={InNum} >increase</button>
        <button onClick={DNum} >decrease</button>
        <button onClick={JNum} >Jump by 5</button>
      </div>
    </div>
  )
}

export default Section1