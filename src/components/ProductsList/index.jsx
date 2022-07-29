import Product from "../Product";
import Ul from "./style";

function ProductsList({ products, showProducts, handleClick }) {
  return (
    <Ul>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            showProducts={showProducts}
            handleClick={handleClick}
          ></Product>
        );
      })}
    </Ul>
  );
}

export default ProductsList;
