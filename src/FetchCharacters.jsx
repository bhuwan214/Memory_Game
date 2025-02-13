import { useState, useEffect } from "react";
import data from "./data.json";
import Tilt from "react-parallax-tilt";
import "./styles.css"; // Ensure CSS is included for animations

export default function FetchCharacters({ level, index }) {

  const [characters, setCharacters] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [clickedCard,setClickedCard]=useState([])

  // Function to get `index` unique random images
  const getRandomCharacters = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, index);
  };

  // Load random images when component mounts
  useEffect(() => {
    setCharacters(getRandomCharacters());
  }, [index]);

  // Handle clicking any card: Flip all cards, then shuffle, then flip back
  const handleCardClick = (card) => {
    
    SelectedCard(card);

    setFlipped(true);

    setTimeout(() => {
      setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 600); 

    setTimeout(() => {
      setFlipped(false); 
    }, 1200); 
  };

  const SelectedCard =(card)=>{
setClickedCard([...clickedCard, card])
  }

  console.log(clickedCard)



  return (
    <div className="image-group">
      {characters.map((curchar) => (
        <Tilt
          key={curchar.id}
          glareEnable={true}
          glareMaxOpacity={0.6}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="20px"
          gyroscope={true}
          className="tilt"
        >
          <div
            className={`card ${flipped ? "flipped" : ""}`}
            onClick={()=>handleCardClick(curchar.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={curchar.url} alt={curchar.name} className="charImage" />
                <h2 className="char-title">{curchar.name}</h2>
              </div>
              <div className="card-back">
                <div className="back-inner"></div>
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
}
