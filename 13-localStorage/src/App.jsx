import React from 'react'

const App = () => {

  // ---- SetItem
  localStorage.setItem("Harsh", 20)
  localStorage.setItem("Batman", "Brave")
  localStorage.setItem("Superman", "good")
  
  // ---- getItem
  const user = localStorage.getItem("Harsh")
  console.log(user)

  // ---- removeItem
  localStorage.removeItem("Superman")

  // ---- clearItem
  // localStorage.clearItem()

  const usera = {
    username: "Harsh",
    age: 20,
    city: "Chennai"
  }
  localStorage.setItem("User", JSON.stringify(usera))

  const usera2 = JSON.parse(localStorage.getItem("User"))
  console.log(usera2)

  return (
    <div>App</div>
  )
}

export default App