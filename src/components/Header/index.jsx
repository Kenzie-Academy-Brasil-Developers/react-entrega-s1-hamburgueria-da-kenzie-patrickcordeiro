import Button from "../Button";
import TagHeader from "./style";

function Header() {
  return (
    <TagHeader>
      <img src="./logo.png" alt="" />
      <div>
        <input type="search" placeholder="Digitar Pesquisa" />
        <Button backgroundColor={"#27AE60"}>Pesquisar</Button>
      </div>
    </TagHeader>
  );
}

export default Header;
