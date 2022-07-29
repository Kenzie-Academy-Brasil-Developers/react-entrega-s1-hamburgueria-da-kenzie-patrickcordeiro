import styled from "styled-components";

const DivApp = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    main {
      flex-direction: row;
      width: 80%;
    }
  }
`;

export default DivApp;
