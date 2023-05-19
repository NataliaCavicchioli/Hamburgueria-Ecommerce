import Product from "../Product";
import { Container } from "./styles";

const ProductsList = ({
  products,
  cartProducts,
  setCartProducts,
  filteredProducts,
}) => {
  return (
    <Container>
      {(filteredProducts.length > 0 ? filteredProducts : products).map(
        (product) => (
          <Product
            key={product.id}
            product={product}
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></Product>
        )
      )}
    </Container>
  );
};

export default ProductsList;
