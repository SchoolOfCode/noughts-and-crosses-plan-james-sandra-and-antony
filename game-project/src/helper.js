export default function calculateWinner(squares) {
  const grid = [
    [0, 1, 2], //top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], //top left to bottom right
    [6, 4, 2], // bottom left to top right
  ];

  for (let i = 0; i < grid.length; i++) {
    const [a, b, c] = grid[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
