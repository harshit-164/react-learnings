import React from 'react'

const Image = (props) => {
    console.log(props);
  return (
    <div>
        <a target="_blank" href={props.elem.url} > <img src={props.elem.download_url} className='bg-cover  rounded-xl h-40 w-44' /> <h3 className='text-white font-bold text-lg'> {props.elem.author} </h3> </a>
    </div>
  )
}

export default Image