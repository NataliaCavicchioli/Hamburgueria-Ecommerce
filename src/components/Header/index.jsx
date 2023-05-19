import Input from "../InputSearch";
import Logo from "../Logo";
import { Container } from "./styles";

const Header = ({
  filteredProducts,
  setFilteredProducts,
  products,
  setProducts,
}) => {
  return (
    <Container>
      <Logo />
      <Input
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
        setProducts={setProducts}
      ></Input>
    </Container>
  );
};

export default Header;
