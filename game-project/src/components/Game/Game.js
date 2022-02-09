import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
  const [game, setGame] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
  const [isXturn, setTurn] = useState(true);

  function handleClick(e) {
    console.log(e);
    console.log(...game.slice(0, e));
    console.log(...game.slice(e));
    if (isXturn) {
      setGame([...game.slice(0, e), "X", ...game.slice(e + 1)]);
    } else {
      setGame([...game.slice(0, e), "O", ...game.slice(e + 1)]);
    }
    setTurn(!isXturn);
    console.log(game);
  }
  return <Board game={game} handleClick={handleClick} />;
}
