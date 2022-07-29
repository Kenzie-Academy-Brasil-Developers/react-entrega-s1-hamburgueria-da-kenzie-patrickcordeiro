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
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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
