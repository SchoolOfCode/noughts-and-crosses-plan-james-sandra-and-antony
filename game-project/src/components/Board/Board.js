import Square from "../Square/Square";
import { useState } from "react";

export default function Board({ game, handleClick }) {
  const [board, setBoard] = useState();

  return game.map((move, index) => {
    return (
      <Square
        choice={move}
        key={index}
        value={index}
        handleClick={() => handleClick(index)}
      />
    );
  });
}
