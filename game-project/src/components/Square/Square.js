import css from "./Square.module.css";
import { useState } from "react";
export default function Square({ choice, handleClick, value }) {
  const [isDisabled, setisDisabled] = useState(false);

  return (
    <button
      className={css.buttons}
      disabled={isDisabled}
      onClick={() => {
        setisDisabled(true);
        handleClick();
      }}
      value={value}
    >
      {choice}
    </button>
  );
}
