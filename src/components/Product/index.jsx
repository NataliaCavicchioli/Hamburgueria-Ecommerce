import Button from "../Button";
import { Container } from "./styles";

const Product = ({ product, cartProducts, setCartProducts }) => {
  const addToCart = () => {
    const rest = cartProducts.filter((item) => item.id !== product.id);
    const found = cartProducts.find((item) => item.id === product.id);

    cartProducts.some((item) => item.id === product.id)
      ? setCartProducts([...rest, { ...found, quantity: found.quantity + 1 }])
      : setCartProducts([...rest, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <Container>
        <div className="container-img">
          <img src={product.img} alt={product.name}></img>
        </div>
        <div className="container-info">
          <h3>{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
          <Button handleClick={addToCart}>Adicionar</Button>
        </div>
      </Container>
    </>
  );
};

export default Product;
