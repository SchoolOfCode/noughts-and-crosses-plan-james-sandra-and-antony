import css from "./Square.module.css";

export default function Square({ choice, handleClick, value }) {
  return (
    <button className={css.buttons} onClick={handleClick} value={value}>
      {choice}
    </button>
  );
}
