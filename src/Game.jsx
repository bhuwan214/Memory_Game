import GameFunctions from "./GameEngine"

export default function Game({level,index}) {
    return (
   <>
     <h1>Difficulity {level}</h1>
      <GameFunctions level={level} index={index} />
   </>
  )
}
