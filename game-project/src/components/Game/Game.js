import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isXturn, setTurn] = useState(true);

  function handleClick(e) {
    if (isXturn) {
      setGame(game.splice(e, 1, "X"));
    } else {
      setGame(game.splice(e, 1, "O"));
    }
    setTurn(!isXturn);
    console.log(game);
  }
  return <Board game={game} handleClick={handleClick} />;
}
