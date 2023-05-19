import { useState } from "react";
import Button from "../Button";
import { InputContainer } from "./styles";

const Input = ({ setFilteredProducts, products }) => {
  const [inputSearch, setInputSearch] = useState("");

  const search = () => {
    const found = products.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredProducts(found);
  };

  return (
    <>
      <InputContainer>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Digite sua pesquisa"
            value={inputSearch}
            onChange={(event) => setInputSearch(event.target.value)}
          ></input>
          <Button handleClick={search}>Pesquisar</Button>
        </form>
      </InputContainer>
    </>
  );
};

export default Input;
