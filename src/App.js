import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Products />
            </>
          }
        ></Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
