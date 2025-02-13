import { useState, useEffect } from "react";
import data from "./data.json";
import Tilt from "react-parallax-tilt";
import "./styles.css"; // Ensure CSS is included for animations and popups

// Component to display the clicked card count
function ClickedCardCount({ clickedCount, totalCards }) {
  return (
    <div className="clicked-card-count">
      <h3>Progress: {clickedCount} / {totalCards}</h3>
    </div>
  );
}

export default function FetchCharacters({ level, index }) {
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
    setClickedCards([]);      // Reset clicked cards when new set is loaded
    setGameStatus("playing"); // Reset game status
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
        setFlipped(true); // Optionally flip all cards
        return;
      }
    }

    // Proceed with flipping all cards and shuffling:
    setFlipped(true);

    // After flip animation completes, shuffle cards
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
    <div>
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
              onClick={() => handleCardClick(curchar.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={curchar.url}
                    alt={curchar.name}
                    className="charImage"
                  />
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

      {/* Display clicked card count */}
    </div>
  );
}


