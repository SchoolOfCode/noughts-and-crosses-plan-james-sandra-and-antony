export default function Square({ choice, handleClick, value }) {
  return (
    <button
      onClick={(value) => {
        handleClick(value);
      }}
    >
      {choice}
    </button>
  );
}
