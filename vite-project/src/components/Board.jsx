import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MyButton from "./MyButton";
import FunctionComponent from "./FunctionComponent";


export default function Board() {
  const [text, setText] = useState("");
  const [countSum, setCountSum] = useState(0);
  const [countRest, setCountRest] = useState(0);
  const [countMulti, setCountMulti] = useState(0);
  const [countDiv, setCountDiv] = useState(0);

  const [countRfcOne, setCountRfcOne] = useState(0);
  const [countRfcTwo, setCountRfcTwo] = useState(0);

  useEffect(() => {
    setCountSum(countRfcOne + countRfcTwo);
    setCountRest(countRfcOne - countRfcTwo);
    setCountMulti(countRfcOne * countRfcTwo);
    setCountDiv(countRfcOne / countRfcTwo);
  }, [countRfcOne, countRfcTwo]);

  const onClick = (e) => {
    alert(`Please give me the ${e.target.id}: ${e.target.value}`);
  };

  const callback = useCallback((data) => {
    setText(data);
  }, []);

  return (
    <>
      <Header text={`Callback from: ${text}`}></Header>
      <MyButton
        counter={countSum}
        onClick={(e) => {
          onClick(e);
        }}
        operation="sum"
      ></MyButton>
      <MyButton
        counter={countRest}
        onClick={(e) => {
          onClick(e);
        }}
        operation="rest"
      ></MyButton>
      <MyButton
        counter={countMulti}
        onClick={(e) => {
          onClick(e);
        }}
        operation="multi"
      ></MyButton>
      <MyButton
        counter={countDiv}
        onClick={(e) => {
          onClick(e);
        }}
        operation="div"
      ></MyButton>
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
    </>
  );
}
