import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  background-color: #f5f5f5;
  border-radius: 5px;
  max-width: 23rem;

  .cart-title {
    height: 4rem;
    background-color: #27ae60;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    border-radius: 8px 8px 0 0;
  }

  .container-products {
    max-height: 18.5rem;
    overflow-y: scroll;
  }

  @media screen and (min-width: 550px) {
    min-width: 22rem;
    height: 18rem;
  }
`;

export const ContainerEmpty = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  p {
    font-weight: 600;
    font-size: 18px;
  }
  span {
    opacity: 0.6;
  }

  @media screen and (min-width: 550px) {
    height: 14rem;
  }
`;
