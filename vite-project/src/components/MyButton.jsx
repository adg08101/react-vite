export default function MyButton({ counter, onClick }) {
  return (
    <>
      <button onClick={onClick}>The sum is: {counter}</button>
    </>
  );
}
