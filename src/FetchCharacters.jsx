import data from  "./data.json"

export default function FetchCharacters() {
console.log(data)

return(
    <div className="image-group">
   { data.map(curchar =>{
        return(
            <div className="image-container" key={curchar.id} >
                 <img src={curchar.url} alt="character image" className="charImage" />
                 <h2 className="char-title">{curchar.name}</h2>
           </div> 
        )
    })
    }
    
   </div>
)
}
