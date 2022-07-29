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

  function showProducts(text) {
    if (text !== undefined) {
      const filtered = products.filter((product) => {
        return product.name.toLowerCase().includes(text.toLowerCase());
      });
      filtered !== -1 &&
        setFilteredProducts((filteredProducts) => [
          ...filteredProducts,
          ...filtered,
        ]);
    }
  }

  const handleClick = (id) => {
    const repeat = currentSale.find((product) => {
      return product.id === id;
    });

    const product = products.find((product) => {
      return product.id === id;
    });

    if (repeat === undefined) {
      setCurrentSale((currentSale) => [...currentSale, product]);
      setCartTotal((old) => old + product.price);
    }
  };

  const removeProduct = (id) => {
    const product = currentSale.find((product) => product.id === id);
    const newArray = currentSale.filter((product) => {
      return product.id !== id;
    });
    setCurrentSale([...newArray]);
    currentSale.length === 1
      ? setCartTotal(0)
      : setCartTotal((old) => old - product.price);
  };

  const removeAll = () => {
    setCurrentSale([]);
    setCartTotal(0);
  };

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <DivApp>
      <GlobalStyle />
      <Header showProducts={showProducts} />
      <main>
        <ProductsList
          products={products}
          showProducts={showProducts}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          removeProduct={removeProduct}
          removeAll={removeAll}
        />
      </main>
    </DivApp>
  );
}

export default App;
