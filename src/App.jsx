import { useState, useEffect } from "react";

import Header from "./components/Header";

import "./index.css";
import Main from "./Main";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  });

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
        setProducts={setProducts}
      ></Header>
      <Main
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></Main>
    </div>
  );
}

export default App;
