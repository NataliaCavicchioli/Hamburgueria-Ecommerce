// import { useEffect } from "react";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { Container, ContainerEmpty } from "./styles";

const Cart = ({ product, cartProducts, setCartProducts }) => {
  return (
    <Container>
      <div className="cart-title">Carinho de Compras</div>

      {cartProducts && cartProducts.length > 0 ? (
        <div className="container-products">
          {cartProducts.map((cartProduct) => (
            <CartProduct
              key={cartProduct.id}
              cartProduct={cartProduct}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))}
        </div>
      ) : (
        <>
          <ContainerEmpty>
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
          </ContainerEmpty>
        </>
      )}
      {cartProducts.length > 0 && (
        <CartTotal
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></CartTotal>
      )}
    </Container>
  );
};

export default Cart;
