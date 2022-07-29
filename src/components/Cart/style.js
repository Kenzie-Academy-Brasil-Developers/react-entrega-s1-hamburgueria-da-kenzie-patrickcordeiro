import styled from "styled-components";

export const DivCart = styled.div`
  width: 90%;
  max-width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: var(--gray-none);
  font-family: var(--font-base);

  @media screen and (min-width: 1024px) {
    align-self: flex-start;
    margin-top: 50px;
  }
`;

export const DivTitle = styled.div`
  height: 50px;
  background-color: var(--green-dark);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px 5px 0 0;

  h3 {
    margin-left: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: var(--white);
  }
`;

export const DivItens = styled.div`
  /* padding: 25px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */
  width: 100%;
`;

export const CartEmpty = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: var(--black);
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-medium);
  }
`;

export const CartFull = styled.div`
  ul {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 90%;

      padding: 10px;
      /* border: 1px solid red; */

      div {
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        gap: 10px;

        div {
          height: 100%;
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: var(--gray-light);
            border-radius: 5px;
          }

          h3 {
            margin-top: 10px;
            font-family: var(--font-base);
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: var(--black);
          }

          span {
            font-family: var(--font-base);
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: var(--gray-medium);
          }
        }
      }
      button {
        margin: 10px 10px 0 0;
        border-style: none;
        background-color: transparent;
        font-family: var(--font-base);
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #bdbdbd;
        cursor: pointer;
      }
    }
  }
`;

export const DivTotal = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border-top: 3px solid var(--gray-light);

  div {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    h3 {
      font-family: var(--font-base);
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: var(--gray-dark);
    }
    p {
      font-family: var(--font-base);
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: var(--gray-medium);
    }
  }

  button {
    width: 90%;
    height: 60px;
    background-color: var(--gray-light);
    font-family: var(--font-base);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-medium);
    border-radius: 8px;
    border-style: none;
    cursor: pointer;
  }
`;
