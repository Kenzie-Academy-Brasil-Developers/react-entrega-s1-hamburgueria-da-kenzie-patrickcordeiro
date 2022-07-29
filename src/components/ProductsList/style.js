import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  width: 90%;

  @media screen and (min-width: 768px) {
    overflow: unset;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    height: inherit;
    margin-top: 50px;
    align-items: stretch;
  }
`;

export default Ul;
