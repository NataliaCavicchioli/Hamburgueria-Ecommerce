import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  height: 7rem;
  padding: 1rem 1rem 0 1rem;
  background-color: #f5f5f5;

  .cart-info {
    width: 7.5rem;
  }

  .cart-img {
    width: 5rem;
    border-radius: 8px;
    background: #dbd9d9;

    img {
      width: 100%;
    }
  }

  h3 {
    margin: 0.7rem 0;

    font-size: 1.1rem;
  }

  span {
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .cart-button {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 0.9rem 0 0.9rem 0.9rem;
      background: none;
      opacity: 0.4;
      cursor: pointer;
    }

    p {
      border: 1px solid #27ae60;
      width: 22px;
      height: 22px;
      text-align: center;
      border-radius: 100%;
      color: #27ae60;
    }
  }
`;
