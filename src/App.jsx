import Home from "./Home"
import Game from "./Game"
import { useState } from "react"

export default function App() {
  const [level,setLevel]=useState()

const onLevelSelection =(id)=>{
  setLevel(id)
}

  return (
    <>
    {( level ? <Game level={level} /> :<Home  difficulty={onLevelSelection}/> )}
      

      
    </>
  )
}

