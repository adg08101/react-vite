import { useState, useEffect, useCallback, useContext } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
// import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import Header from "./components/Header";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import ProductChart from "./components/ProductChart";
import { DataProvider } from "./contexts/DataContext";
import ProductListDataContext from "./components/ProductListDataContext";
import ProductChartDataContext from "./components/ProductChartDataContext";

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

  const callback = useCallback((data) => {
    setText(data);
  }, []);

  return (
    // Always use single fragment label
    <>
      <div style={{ padding: "20px" }}>
        <DataProvider>
          <ProductListDataContext
            onBuy={(item) => buyAction(item)}
          ></ProductListDataContext>

          <ProductChartDataContext
            onBuy={(item) => buyAction(item)}
          ></ProductChartDataContext>

          {/* <h2>Product List</h2>

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
                    <ProductList
                      key={`list${item.id}`}
                      product={item}
                      onBuy={(item) => buyAction(item)}
                    />
                  )
              )}
            </div>
                  )} */}

          {/* <h2>Product Chart</h2>

          {productsChart.length === 0 ? (
            <p>No product on chart :s</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {productsChart.map(
                (item) =>
                  item.id > 0 && (
                    <ProductChart
                      key={`chart${item.id}`}
                      product={item}
                      onRemove={(item) => removeAction(item)}
                    />
                  )
              )}
            </div>
                  )} */}
        </DataProvider>
        {/* <MyButton
          counter={products.length}
          onClick={() => {
            const updatedProducts = products;
            setProducts(updatedProducts);
            setProductsBackup(updatedProducts);

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
        ></MyButton> */}
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
