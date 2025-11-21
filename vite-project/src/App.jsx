import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  const [count, setCount] = useState(0);

  const [countRfcOne, setCountRfcOne] = useState(0);
  const [countRfcTwo, setCountRfcTwo] = useState(0);

  useEffect(() => {
    setCount(countRfcOne + countRfcTwo);
  }, [countRfcOne, countRfcTwo]);

  const onClick = () => {
    alert(`Please give me the sum: ${countRfcOne + countRfcTwo}`);
  };

  return (
    <>
      <MyButton counter={count} onClick={onClick}></MyButton>
      <FunctionComponent
        counter={countRfcOne}
        increase={() => {
          setCountRfcOne(countRfcOne + 1);
        }}
        decrease={() => {
          setCountRfcOne(countRfcOne - 1);
        }}
      ></FunctionComponent>
      <FunctionComponent
        counter={countRfcTwo}
        increase={() => {
          setCountRfcTwo(countRfcTwo + 1);
        }}
        decrease={() => {
          setCountRfcTwo(countRfcTwo - 1);
        }}
      ></FunctionComponent>
    </>
  );
}

export default App;
