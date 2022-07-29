import { useEffect } from "react";
import { DivCart, DivTitle, DivItens } from "./style";

function Cart({}) {
  return (
    <DivCart>
      <DivTitle>
        <h3>Carrinho de Compras</h3>
      </DivTitle>
      <DivItens>
        <h2>Sua sacola está vazia</h2>
        <span>Adicione itens</span>
      </DivItens>
    </DivCart>
  );
}

export default Cart;
