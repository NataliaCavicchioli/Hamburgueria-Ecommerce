import styled from "styled-components";

export const Container = styled.div`
  border-top: 2px solid #e0e0e0;
  height: 127px;
  background-color: #f5f5f5;
  padding: 0 1rem;
  border-radius: 0 0 8px 8px;

  div {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 14px;
    }

    p {
      color: #828282;
      font-weight: 500;
      font-size: 14px;
    }
  }

  button {
    width: 100%;
    height: 3.5rem;
    background-color: #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #828282;
    cursor: pointer;
  }

  button:hover {
    background-color: #828282;
    color: #e0e0e0;
  }
`;
