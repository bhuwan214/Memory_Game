# Creating a Memory Game in React with React-Parallax-Tilt

## Introduction
This guide will walk you through building a **Memory Game** using React. The game involves flipping cards to match pairs, using **react-parallax-tilt** for enhanced visual effects.

## Features
- Flip cards to reveal hidden images.
- Track the number of moves made.
- Match pairs to win the game.
- Use `react-parallax-tilt` for 3D card tilting effects.
- Responsive layout for all screen sizes.

## Prerequisites
Before starting, ensure you have:
- **Node.js** installed
- **npm** or **yarn** installed

## Project Setup
### 1. Create a React App
```sh
npx create-react-app memory-game
cd memory-game
```

### 2. Install Required Packages
```sh
npm install react-parallax-tilt
```

 ##Card component with `reac-parallax-tilt`

```jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import "./styles.css";

export const Card = ({ character, flipped, handleCardClick }) => {
  return (
    <Tilt className="tilt" glareEnable={true} glareMaxOpacity={0.6}>
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleCardClick}>
        <div className="card-inner">
          <div className="card-front">
            <img src={character.url} alt={character.name} />
          </div>
          <div className="card-back" />
        </div>
      </div>
    </Tilt>
  );
};
```




## Running the Game
To start the game, run:
```sh
npm start
```

## Conclusion
This guide covers the basics of creating a memory game in React, using `react-parallax-tilt` for smooth 3D effects. You can extend this by adding animations, sound effects, or a scoring system.

Happy coding! 🎮

