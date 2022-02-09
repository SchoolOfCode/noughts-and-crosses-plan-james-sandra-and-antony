export default function Square({ choice, handleClick, value }) {
  return (
    <button
      onClick={(e) => {
        handleClick(e.target.value);
      }}
      value={value}
    >
      {choice}
    </button>
  );
}
