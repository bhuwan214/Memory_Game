import { useState, useEffect } from "react";
import data from "./data.json";

export default function FetchCharacters({ level, index }) {
  const [characters, setCharacters] = useState([]);

  // Function to get `index` random images
  const getRandomCharacters = () => {
    return [...data]
      .sort(() => Math.random() - 0.5) // Shuffle array
      .slice(0, index); // Pick `index` items
  };

  // Load random images when component mounts or `index` changes
  useEffect(() => {
    setCharacters(getRandomCharacters());
  }, [index]); // Re-run when `index` updates

  // Shuffle only the selected images
  const shuffleImages = () => {
    setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="image-group">
      {characters.map((curchar) => (
        <div
          className="image-container"
          key={curchar.id}
          onClick={shuffleImages} // Shuffle when any image is clicked
        >
          <img src={curchar.url} alt={curchar.name} className="charImage" />
          <h2 className="char-title">{curchar.name}</h2>
        </div>
      ))}
    </div>
  );
}
