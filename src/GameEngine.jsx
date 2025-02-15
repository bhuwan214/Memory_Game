import { useState, useEffect } from "react";
import data from "./data.json";
import {ClickedCardCount,FetchCards} from "./FetchCards"




export default function GameFunctions({ level, index }) {
  const [characters, setCharacters] = useState([]);
  const [flipped, setFlipped] = useState(false); // Global flip state
  const [clickedCards, setClickedCards] = useState([]); // Array of clicked card IDs
  const [gameStatus, setGameStatus] = useState("playing"); // "playing", "gameOver", or "win"

  // Function to get 'index' unique random images
  const getRandomCharacters = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, index);
  };

  // Load random unique images when component mounts or 'index' changes
  useEffect(() => {
    setCharacters(getRandomCharacters());
    setClickedCards([]);  
    setGameStatus("playing"); 
    setFlipped(false);
  }, [index]);

  // Handle card click:
  const handleCardClick = (id) => {
    // If game already ended, do nothing
    if (gameStatus !== "playing") return;

    // Check if card has already been clicked
    if (clickedCards.includes(id)) {
      setGameStatus("gameOver");
      return;
    } else {
      // Record the new card click
      const newClicked = [...clickedCards, id];
      setClickedCards(newClicked);

      

      // If all cards are clicked uniquely, player wins
      if (newClicked.length === characters.length) {
        setGameStatus("win");
        setFlipped(true); 
        return;
      }
    }
    
    setFlipped(true);

    setTimeout(() => {
      setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 600); // This delay should match your CSS transition time

    // Flip cards back after another delay
    setTimeout(() => {
      setFlipped(false);
    }, 1200);
  };

  // Reset the game (for restarting after win or game over)
  const resetGame = () => {
    setClickedCards([]);
    setGameStatus("playing");
    setCharacters(getRandomCharacters());
    setFlipped(false);
  };

  return (
    <div className="container">
      {/* Display popup messages for game over or win */}
      {gameStatus === "gameOver" && (
        <div className="popup game-over">
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
      {gameStatus === "win" && (
        <div className="popup win">
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}

      <ClickedCardCount clickedCount={clickedCards.length} totalCards={characters.length} />
      <FetchCards handleCardClick ={handleCardClick} flipped={flipped} characters ={characters}/>

  
    </div>
  );
}


