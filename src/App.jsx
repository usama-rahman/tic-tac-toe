const App = () => {
  const handleSquareClick = () => {};
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-black text-white">
        <div className=" flex flex-col">
          <Square suareClick={() => handleSquareClick(0)} />
          <Square />
          <Square />
        </div>
        <div className=" flex flex-col ">
          <Square />
          <Square />
          <Square />
        </div>
        <div className=" flex flex-col ">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
};

export default App;

const Square = () => {
  return (
    <button className="w-16 h-16 border-[2px] border-white text-3xl m-2 font-semibold rounded-lg "></button>
  );
};

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
