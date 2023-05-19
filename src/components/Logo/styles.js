import styled from "styled-components";

export const LogoContainer = styled.div`
  font-family: "Inter";
  display: flex;
  gap: 0.5rem;
  font-size: 20px;

  p {
    font-weight: 700;
  }

  span {
    color: red;
    font-weight: 600;
  }

  @media screen and (min-width: 550px) {
    margin-left: 3rem;
  }
`;
