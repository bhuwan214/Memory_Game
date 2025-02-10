export default function Home({difficulty}) {

    // Click handle function , help in props
  const handleClick = (id) => {
 difficulty(id)
  };


  return (
    <>

    <div className="levelModal">
        <img src="download.png" alt="" className="title-image" />
      <h1>Memory Game</h1>
      <div className="btn">
      <button onClick={() => handleClick(1)}>Easy</button>
      <button onClick={() => handleClick(2)}>Medium</button>
      <button onClick={() => handleClick(3)}>Hard</button>
      </div>
      
    </div>


    </>
  );
}
