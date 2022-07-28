import styled from "styled-components";

export const TagButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 8px;
  color: var(--white);
  font-family: var(--font-base);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  border-style: none;
`;
