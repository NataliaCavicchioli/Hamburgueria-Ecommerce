import { Container } from "./styles";

const CartTotal = ({ cartProducts, setCartProducts }) => {
  const removeAll = () => {
    setCartProducts([]);
  };

  return (
    <Container>
      <div>
        <strong>Total</strong>
        <p>
          R$
          {cartProducts
            .reduce((a, b) => a + b.price * b.quantity, 0)
            .toFixed(2)
            .replace(".", ",")}
        </p>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </Container>
  );
};

export default CartTotal;
