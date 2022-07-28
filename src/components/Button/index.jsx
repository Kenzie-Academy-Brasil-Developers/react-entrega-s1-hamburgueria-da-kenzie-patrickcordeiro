import { TagButton } from "./style";

function Button({ children, backgroundColor }) {
  return <TagButton backgroundColor={backgroundColor}>{children}</TagButton>;
}

export default Button;
