import ".././App.css";
import { DataProvider } from ".././contexts/DataContext";
import ProductListDataContext from "./ProductListDataContext";
import ProductChartDataContext from "./ProductChartDataContext";

function ShoppingApp() {
  return (
    // Always use single fragment label
    <>
      <DataProvider>
        <ProductListDataContext></ProductListDataContext>

        <ProductChartDataContext></ProductChartDataContext>
      </DataProvider>
    </>
  );
}

export default ShoppingApp;
