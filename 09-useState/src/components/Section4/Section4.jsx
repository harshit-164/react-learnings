import React, { useState } from 'react'
import styles from "../Section4/Section4.module.css"



const Section4 = () => {
    const [num, setNum] = useState(0)

    const change2 = () => {
            setNum(prev=>(prev+1))
            setNum(prev=>(prev+1))
            setNum(prev=>(prev+1))
    }

  return (
    <div className={styles.Section4}>
        <h2 className={styles.title2}>{num}</h2>
        <button onClick={change2} className={styles.change2} > change </button>
    </div>
  )
}

export default Section4