import FetchCharacters from "./FetchCharacters"

export default function Game({level,index}) {
    return (
   <>
     <h1>Difficulity {level}</h1>
      <FetchCharacters level={level} index={index} />
   </>
  )
}
