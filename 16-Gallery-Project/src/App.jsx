import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './components/image'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(function(){
    apiCalling()
  },[index])

  const apiCalling = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    console.log("API response:", response.data)
    setUserData(response.data)
  }

  let printUserData = <h3 className='bg-gray-500 font-bold absolute top-1/2 left-1/2 -translate-1/2'>Loading..</h3>
  if (userData.length > 0){
   printUserData = userData.map(function (elem, idx){
      return(
        <Image elem={elem} key={idx} />
      )
    })
  }
  
  return (
    <div className='bg-black h-lvh w-full p-4 overflow-auto'>

    <div className='flex items-center justify-center flex-wrap gap-5 mt-3.5'>
      {printUserData}
      </div>
     
      <div className="flex gap-2.5 justify-center items-center mt-10">
      <button className='bg-amber-300 rounded-xl text-black-50 px-4 py-2 cursor-pointer active:scale-y-95'
      onClick={()=>{
        if(index>1){
          setIndex(index-1)
        }
      }}
      >Prev</button>

      <h4 className='text-white'>Page {index} </h4>
      
      <button className='bg-amber-300 rounded-xl text-black-50 px-4 py-2 cursor-pointer active:scale-y-95'
      onClick={()=>{
        setIndex(index+1)
      }}
      >Next</button>
      </div>
    </div>
  )
}

export default App
