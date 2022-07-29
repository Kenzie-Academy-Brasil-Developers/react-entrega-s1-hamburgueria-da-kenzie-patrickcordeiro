import Button from "../Button";
import { Li, Price } from "./style";

function Product({ product, handleClick, showProducts }) {
  const { id, name, category, price, img } = product;

  return (
    <Li id={id}>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>{category}</span>
      <Price>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
      <Button
        backgroundColor={"#27AE60"}
        showProducts={showProducts}
        handleClick={handleClick}
        id={id}
      >
        Adicionar
      </Button>
    </Li>
  );
}

export default Product;
