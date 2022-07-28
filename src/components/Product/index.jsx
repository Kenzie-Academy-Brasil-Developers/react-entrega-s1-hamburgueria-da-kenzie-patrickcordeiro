import Button from "../Button";
import { Li, Price } from "./style";

function Product({ product }) {
  const { id, name, category, price, img } = product;

  return (
    <Li id={id}>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>{category}</span>
      <Price>R$ {price},00</Price>
      <Button backgroundColor={"#27AE60"}>Adicionar</Button>
    </Li>
  );
}

export default Product;
