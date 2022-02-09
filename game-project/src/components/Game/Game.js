import { useState } from "react";
import Board from "../Board/Board";
import calculateWinner from "../../helper";

export default function Game() {
  const [game, setGame] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXturn, setTurn] = useState(true);

  const winner = calculateWinner(game);
  console.log(`This is the winner: ${winner}!`);

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
