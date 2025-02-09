export default function Home({difficulty}) {
  const handleClick = (id) => {
 difficulty(id)
  };


  return (
    <>

    <div>
      <h1>Memory Game</h1>
      <button onClick={() => handleClick(1)}>Easy</button>
      <button onClick={() => handleClick(2)}>Medium</button>
      <button onClick={() => handleClick(3)}>Hard</button>
    </div>


    </>
  );
}
