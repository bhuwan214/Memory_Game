import FetchPokemons from "./FetchPokemon"
import LevelModal from "./components/LevelModal"

export default function App() {
  
  const { pokemons, getRandomPokemons, shufflePokemons, setPokemons}=FetchPokemons()
console.log(pokemons)
return(
  <>
    <LevelModal/>
  </>
)


}
