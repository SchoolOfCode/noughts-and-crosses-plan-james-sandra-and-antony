import Square from "../Square/Square";
import { useState } from "react";

export default function Board({ game }) {
  const [board, setBoard] = useState();

  return game.map((move) => {
    return <Square choice={move} />;
  });
}
