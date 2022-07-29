import {
  DivCart,
  DivTitle,
  DivItens,
  CartEmpty,
  CartFull,
  DivTotal,
} from "./style";

function Cart({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  removeProduct,
  removeAll,
}) {
  return (
    <DivCart>
      <DivTitle>
        <h3>Carrinho de Compras</h3>
      </DivTitle>
      <DivItens>
        {currentSale.length === 0 ? (
          <CartEmpty>
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </CartEmpty>
        ) : (
          <CartFull>
            <ul>
              {currentSale.map((product) => {
                return (
                  <li id={product.id}>
                    <div>
                      <div>
                        <img src={product.img} alt={product.name} />
                      </div>
                      <div>
                        <h3>{product.name}</h3>
                        <span>{product.category}</span>
                      </div>
                    </div>

                    <button onClick={() => removeProduct(product.id)}>
                      Remover
                    </button>
                  </li>
                );
              })}
            </ul>
          </CartFull>
        )}
      </DivItens>
      {currentSale.length !== 0 && (
        <DivTotal>
          <div>
            <h3>Total</h3>
            <span>
              <p>
                {cartTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </span>
          </div>
          <button onClick={() => removeAll()}>Remover Todos</button>
        </DivTotal>
      )}
    </DivCart>
  );
}

export default Cart;
