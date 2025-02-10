import Home from "./Home"
import Game from "./Game"
import { useState } from "react"
import FetchCharacters from "./FetchCharacters"

export default function App() {
  // const for storing value of clicked button 
  const [level,setLevel]=useState()

const onLevelSelection =(id)=>{
  setLevel(id)
}

  return (
    <>
    {( level ? <Game level={level} /> :<Home  difficulty={onLevelSelection}/> )}
      
<FetchCharacters/>
      
    </>
  )
}

