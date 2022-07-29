import DivApp from "./style";
import GlobalStyle from "./styles/global";
import api from "./services/api";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // function showProducts() {}

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <DivApp>
      <GlobalStyle />
      <Header />
      <main>
        <ProductsList products={products} />
        <Cart />
      </main>
    </DivApp>
  );
}

export default App;
