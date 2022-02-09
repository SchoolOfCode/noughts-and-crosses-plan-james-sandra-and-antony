export default function Square({ choice, handleClick, value }) {
  return (
    <button onClick={handleClick} value={value}>
      {choice}
    </button>
  );
}
