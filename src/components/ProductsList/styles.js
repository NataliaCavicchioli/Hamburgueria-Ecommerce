import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: scroll;

  @media screen and (min-width: 550px) {
    flex-wrap: wrap;
    max-width: 58rem;
    overflow: visible;
  }
`;
