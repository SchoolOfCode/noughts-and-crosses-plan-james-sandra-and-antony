import Square from "../Square/Square";
import { useState } from "react";
import css from "./Board.module.css";

export default function Board({ game, handleClick }) {
  const [board, setBoard] = useState();

  return (
    <div className={css.container}>
      {game.map((move, index) => {
        return (
          <Square
            choice={move}
            key={index}
            value={index}
            handleClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}
