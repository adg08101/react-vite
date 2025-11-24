import "./App.css";
import Form from "./components/Form";
import ShoppingApp from "./components/ShoppingApp";
import Board from "./components/Board";
import Index from "./components/Index";
import ProductContext from "./components/ProductContext";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // Always use single fragment label
    <>
      <BrowserRouter>
        <Navigation></Navigation>

        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Form />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/shopping" element={<ShoppingApp />}></Route>
          <Route path="/product/:id" element={<ProductContext />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
