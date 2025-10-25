import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex p-3 bg-gray-700 gap-2' >
        <button onClick={()=>{
            navigate('/')
        }} >Go to Home</button>
        <button onClick={()=>{
            navigate(+1)
        }} >Next</button>
        <button onClick={()=>{
            navigate(-1)
        }} >Prev</button>
    </div>
  )
}

export default Navbar2