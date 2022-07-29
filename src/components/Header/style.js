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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    height: 80px;
    justify-content: space-between;
    background-color: transparent;

    img {
      margin-top: 0;
    }

    div {
      margin-bottom: 0;
      width: 365px;
      height: 50px;
      padding: 0;
      justify-content: space-between;
      padding: 5px;
    }

    input::placeholder {
      font-weight: 400;
      font-size: 16px;
    }

    button {
      padding: 10px;
    }
  }
`;

export default TagHeader;
