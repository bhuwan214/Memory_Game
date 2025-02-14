import Tilt from "react-parallax-tilt";
import Uniqid from "uniqid"
import "./styles.css"; 

    
 export const ClickedCardCount=({ clickedCount, totalCards }) =>{
    return (
      <div className="clicked-card-count">
        <h3>Progress: {clickedCount} / {totalCards}</h3>
      </div>
    );
  }


 export const FetchCards =({characters,flipped,handleCardClick})=>{
    return(
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
    )
  
  }
