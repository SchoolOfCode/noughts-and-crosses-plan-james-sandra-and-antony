import { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  return <Board game={game} />;
}
