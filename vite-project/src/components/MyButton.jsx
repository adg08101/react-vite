export default function MyButton({ counter, onClick, operation }) {
  return (
    <>
      <button id={operation} onClick={onClick} value={String(counter)}>
        The {operation} is: {counter}
      </button>
    </>
  );
}
