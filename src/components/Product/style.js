import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
  align-items: flex-start;
  border: 2px solid var(--gray-light);
  margin: 5px;
  width: 300px;
  height: 80%;
  gap: 10px;
  max-height: 400px;

  div {
    width: 100%;
    background-color: var(--gray-none);
  }

  img {
    width: 177px;
    height: 177px;
  }

  h3,
  span {
    font-family: var(--font-base);
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: var(--black);
  }

  @media screen and (min-width: 768px) {
    height: auto;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Category = styled.span`
  font-family: var(--font-base);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--gray-medium);
`;

export const Price = styled(Category)`
  font-weight: 600;
  font-size: 14px;
  color: var(--green-dark);
`;
