import { TagButton } from "./style";

function Button({
  children,
  backgroundColor,
  showProducts,
  search,
  handleClick,
  id,
}) {
  return (
    <TagButton
      backgroundColor={backgroundColor}
      onClick={() => {
        showProducts(search);
        handleClick(id);
      }}
    >
      {children}
    </TagButton>
  );
}

export default Button;
