import styled from "styled-components";

export const InputContainer = styled.div`
  width: 320px;
  height: 2.6rem;

  form {
    height: 100%;
  }

  input {
    margin-left: 0.9rem;
    width: 91%;
    border-radius: 8px;
    padding-left: 0.5rem;
    height: 100%;
    border: 1px solid #e0e0e0;
  }

  button {
    position: relative;
    top: -37px;
    left: 194px;
    font-size: 14px;
  }

  @media screen and (min-width: 550px) {
    margin-right: 2rem;
  }
`;
