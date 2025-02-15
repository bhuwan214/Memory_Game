import { useState } from "react";

export default function Home({ setdifficulty }) {
  const [selection, setSelection] = useState(null);

  // Level details array (placed before usage)
  const levelDetails = [
    { difficulty: "Easy", index: 6 },
    { difficulty: "Medium", index: 9 },
    { difficulty: "Hard", index: 12 }
  ];

  // Click handler function
  const handleClick = (id) => {
    const selectedLevel = levelDetails[id - 1]; // Adjusting for zero-based index
    setSelection(selectedLevel);
    setdifficulty(selectedLevel); // Passing the selected difficulty to the parent
  };

  return (
    <>
      <div className="levelModal">
        <img src="download.png" alt="" className="title-image" />
        <h1 className="h1">Memory Game</h1>
        <div className="btn">
          <button onClick={() => handleClick(1)}>Easy</button>
          <button onClick={() => handleClick(2)}>Medium</button>
          <button onClick={() => handleClick(3)}>Hard</button>
        </div>
      </div>
    

    </>
  );
}
