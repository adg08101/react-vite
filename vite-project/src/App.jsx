import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  const [count, setCount] = useState(0);

  const onClickFunction = () => {
    setCount(10);
    alert(count);
  };

  return (
    <>
      <MyButton onClickFunction={onClickFunction}></MyButton>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
    </>
  );
}

export default App;
