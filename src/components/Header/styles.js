import styled from "styled-components";

export const Container = styled.header`
  background-color: #f5f5f5;
  width: 100vw;
  height: 139px;

  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
  }
`;
