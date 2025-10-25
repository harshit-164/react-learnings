import React from 'react'
import { Link,Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className='flex justify-around w-full' >
      <Link to='/product/men' >Men</Link>
      <Link to='/product/women' >Women</Link>
      <Link to='/product/kid' >Kids</Link>

      <Outlet />
    </div>
  )
}

export default Product