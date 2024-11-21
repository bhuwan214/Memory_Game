export function GetPokemon (){
    const fetchImage = async()=>{
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/3')
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            console.log(data.sprites.front_default)
    
        }
        
        catch(error){
            console.error('There has been a problem with your fetch operation:', error)
        }
    }
    fetchImage()
}

