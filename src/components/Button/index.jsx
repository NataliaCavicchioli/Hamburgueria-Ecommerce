import { ButtonMain } from "./styles";

const Button = ({ children, handleClick }) => {
  return (
    <>
      <ButtonMain>
        <button className="main-button" onClick={handleClick}>
          {children}
        </button>
      </ButtonMain>
    </>
  );
};

export default Button;
