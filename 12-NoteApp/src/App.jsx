import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])


  function submitHandler(e){
    e.preventDefault()
    // console.log(title)
    // console.log(detail)
    // console.log("Form Submitted")
    const copyTask = [...task];
    copyTask.push({title, detail})

    setTask(copyTask)
    

    setTitle("")
    setDetail("")
  }


    const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  function noteTitle(e){
    setTitle(e.target.value)
  }

  function noteDetail(e){
    setDetail(e.target.value)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white' >
      <form 
      onSubmit={(e)=>{submitHandler(e)}}
      className='flex gap-4 lg:w-1/2 flex-col items-start p-10' >
        <h1 className='text-3xl font-bold' >Add Notes</h1>
        

          {/* Pehla -------------------- Input */}
          <input 
          type="text" 
          onChange={(e)=>{
            noteTitle(e)
          }}
          value={title}
          name="" 
          id=""
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
           />

          {/* Details -------- wala --------- input */}
          <textarea 
          name="" 
          onChange={(e)=>{
            noteDetail(e)
          }}
          value={detail}
          id=""
          placeholder='Write Details'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          ></textarea>


          <button 
          className='bg-white active:scale-99 active:bg-gray-400 font-medium w-full outline-none text-black border-2 p-2 rounded cursor-pointer'
          >Note</button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2' >
      <h1 className='text-4xl font-bold py-10 px-5' >Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-center gap-5 mt-5 h-full overflow-y-auto ' >
          {task.map(function(elem, idx){
            return <div key={idx} className=' flex justify-between flex-col items-start  h-52 w-40 rounded-xl text-black p-4 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] ' >
              <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500' > {elem.detail} </p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
        </div>
          })}
      </div>
      </div>
    </div>
  )
}

export default App