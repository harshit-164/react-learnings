import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // const callApi = async ()=>{
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  //   console.log(response);
  // }

  const [data, setData] = useState([])

  const getApi = async ()=>{
    const users = await axios.get("https://picsum.photos/v2/list?page=3&limit=10");
    setData(users.data);
  }

  return (
    <div>
      {/* <button onClick={callApi} >Get Data</button>
      <br /> */}
      <button onClick={getApi} >Get Data</button>
      <div>
        {data.map(function(elem, idx){

          return <h3 key={idx} >Hello,{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App