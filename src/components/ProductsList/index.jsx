import Product from "../Product";
import Ul from "./style";

function ProductsList({ products }) {
  return (
    <Ul>
      {products.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </Ul>
  );
}

export default ProductsList;
