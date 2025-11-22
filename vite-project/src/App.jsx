import { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const [countRfcOne, setCountRfcOne] = useState(0);
  const [countRfcTwo, setCountRfcTwo] = useState(0);

  useEffect(() => {
    setCount(countRfcOne + countRfcTwo);
  }, [countRfcOne, countRfcTwo]);

  const onClick = () => {
    alert(`Please give me the sum: ${countRfcOne + countRfcTwo}`);
  };

  const callback = useCallback(
    (data) => {
      setText(data);
    },
    [text]
  );

  return (
    <>
      <Header text={`Callback from: ${text}`}></Header>
      <MyButton counter={count} onClick={onClick}></MyButton>
      <MyButton counter={count} onClick={onClick}></MyButton>
      <MyButton counter={count} onClick={onClick}></MyButton>
      <MyButton counter={count} onClick={onClick}></MyButton>
      <FunctionComponent
        counter={countRfcOne}
        increase={() => {
          setCountRfcOne(countRfcOne + 1);
        }}
        decrease={() => {
          setCountRfcOne(countRfcOne - 1);
        }}
        message="RFC number 1"
        callback={callback}
      ></FunctionComponent>
      <FunctionComponent
        counter={countRfcTwo}
        increase={() => {
          setCountRfcTwo(countRfcTwo + 1);
        }}
        message="RFC number 2"
        decrease={() => {
          setCountRfcTwo(countRfcTwo - 1);
        }}
        callback={callback}
      ></FunctionComponent>
      <Form></Form>
    </>
  );
}

export default App;
