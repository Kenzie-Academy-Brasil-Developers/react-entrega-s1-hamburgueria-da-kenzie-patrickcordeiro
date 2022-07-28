import styled from "styled-components";

const TagHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: var(--gray-none);

  img {
    margin-top: 10px;
  }

  div {
    width: 90%;
    border: 1px solid var(--gray-light);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: var(--white);
    padding: 5px;
  }

  input {
    border-style: none;
  }

  input::placeholder {
    font-family: var(--font-base);
    font-style: normal;
  }
`;

export default TagHeader;
