import Home from "./Home"
import Game from "./Game"
import { useState } from "react"

export default function App() {
  // const for storing value of clicked button 
  const [level,setLevel]=useState(null)
  const [index,setIndex]=useState(null)

const onLevelSelection =(selectedLevel)=>{
  console.log(selectedLevel)
  setLevel(selectedLevel.difficulty)
  setIndex(selectedLevel.index)
}





  return (
    <>
    {( level ? <Game level={level} index={index} /> :<Home  setdifficulty={onLevelSelection}/> )}
            
    </>
  )
}

