import { useState } from "react";
import Button from "../Button";
import TagHeader from "./style";

function Header({ showProducts }) {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <TagHeader>
      <a href="/">
        <img src="./logo.png" alt="" />
      </a>

      <div>
        <input
          type="search"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          backgroundColor={"#27AE60"}
          showProducts={showProducts}
          search={search}
        >
          Pesquisar
        </Button>
      </div>
    </TagHeader>
  );
}

export default Header;
