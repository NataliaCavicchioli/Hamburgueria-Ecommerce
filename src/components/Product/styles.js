import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  min-width: 17rem;
  height: 21rem;
  font-family: "Inter";
  margin: 1.2rem 0.1rem 1.2rem 1.2rem;

  .container-img {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 9.3rem;
    background-color: #f5f5f5;

    img:hover {
      transform: scale(1.2);
    }
  }

  .container-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .product-category {
      font-size: 13px;
      opacity: 0.8;
    }

    > p + p {
      color: #27ae60;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
