import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div id="parent">
    <Card user="Sarthak" age="30" img="https://i.pinimg.com/736x/69/3c/3a/693c3ab542074e31dcd94b06eccd4b79.jpg" />
    <Card user="Harsh" age="35" img="https://i.pinimg.com/736x/a2/00/ec/a200ec49207dd679a78dcba2b0563415.jpg" />
    <Card user="Satwik" age="27" img="https://i.pinimg.com/736x/f4/03/c6/f403c64686a8dae5610b3436dd93e254.jpg" />
    <Card user="Ankur" age="30" img="https://i.pinimg.com/736x/e8/60/94/e86094ab8fa272257cbdb5a91ff5f010.jpg" />
    </div>
  )
}

export default App