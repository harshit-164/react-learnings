import React from 'react'

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex justify-between p-3 bg-black text-amber-50 w-screen' >
        <div className='w-1/2' >Sheriyans</div>
        <div className='flex gap-25 pl-55 w-1/2 ' >
            <div><Link to='/' >Home</Link></div>
            <div><Link to='/product' >Product</Link></div>
            <div><Link to='/about' >About</Link></div>
            <div><Link to='/courses' >Courses</Link></div>
        </div>
    </div>
  )
}

export default Navbar