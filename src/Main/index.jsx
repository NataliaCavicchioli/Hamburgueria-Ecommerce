import Cart from "../components/Cart";
import ProductsList from "../components/ProductsList";
import { Container } from "./styles";

const Main = ({
  products,
  filteredProducts,
  setFilteredProducts,
  cartProducts,
  setCartProducts,
}) => {
  return (
    <Container>
      <ProductsList
        products={products}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      ></ProductsList>
      <Cart
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></Cart>
    </Container>
  );
};

export default Main;
