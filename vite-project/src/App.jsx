import { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import Header from "./components/Header";
import Form from "./components/Form";
import Product from "./components/Product";

function App() {
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

  const callback = useCallback(
    (data) => {
      setText(data);
    },
    [text]
  );

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 25,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 45,
    },
    {
      id: 4,
      name: "Laptop personal",
      price: 1200,
    },
  ]);

  const [productsBackup, setProductsBackup] = useState(products);

  return (
    // Always use single fragment label
    <>
      <div style={{ padding: "20px" }}>
        <h2>Product List</h2>

        {products.length === 0 ? (
          <p>No product on list :s</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {products.map(
              (item) =>
                item.id > 0 && (
                  <Product
                    key={item.id}
                    product={item}
                    onBuy={(p) => alert(`Buying ${p.name} for $${p.price}`)}
                  />
                )
            )}
          </div>
        )}
        <MyButton
          counter={products.length}
          onClick={() => {
            products.length != 0
              ? setProducts([])
              : setProducts(productsBackup);
          }}
          operation="Products operations"
        ></MyButton>
        <MyButton
          counter={products.length}
          onClick={() => {
            const newProduct = {
              id: products.length + 1,
              name: "Bread",
              price: 20,
            };

            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);
            setProductsBackup(updatedProducts);
          }}
          operation="Products add operations"
        ></MyButton>
      </div>
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
      <Form></Form>
    </>
  );
}

export default App;
