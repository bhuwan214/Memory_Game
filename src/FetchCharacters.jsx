import data from  "./data.json"

export default function FetchCharacters() {
console.log(data)

return(
    data.map(curchar=>{
        return(
            <div  key={curchar.id} >
                 <img src={curchar.url} alt="" />
                 <h2>{curchar.name}</h2>
                 
           </div>
           
        )
    })
   
)
}
