import React, { useState } from 'react'
import styles from '../Section3/Section3.module.css'

const Section3 = () => {
    const [title, settitile] = useState([1,2,3,4,5])
    const change = ()=>{
        var newTitle = [...title]
        newTitle.push(69)
        settitile(newTitle)
    }
  return (

    <div className={styles.Section3}>
        <h2 className={styles.title} >{title}</h2>
        <button onClick={change} className={styles.change} > change </button>
    </div>
  )
}

export default Section3