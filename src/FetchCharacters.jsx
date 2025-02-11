import { useState, useEffect } from "react";
import data from "./data.json";
import Tilt from "react-parallax-tilt";
import "./styles.css"; // Ensure CSS is included for animations

export default function FetchCharacters({ level, index }) {
  const [characters, setCharacters] = useState([]);
  const [flippedCards, setFlippedCards] = useState({}); // Track flipped state per card

  // Function to get unique `index` random images
  const getRandomCharacters = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, index);
  };

  // Load random unique images when component mounts
  useEffect(() => {
    setCharacters(getRandomCharacters());
  }, [index]); // Re-run when `index` updates

  // Handle flipping individual cards
  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle flip state for clicked card
    }));
  };

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
            className={`card ${flippedCards[curchar.id] ? "flipped" : ""}`}
            onClick={() => handleCardClick(curchar.id)} // Flip only clicked card
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
