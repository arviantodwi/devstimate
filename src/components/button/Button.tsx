import styled from "styled-components";

import { pxToRem } from "../../app/helpers";
import { COLOR_CHAMBRAY } from "../../app/constants";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const StyledButton = styled.button`
  white-space: nowrap;
  appearance: none;
  border: 0;
  border-radius: 4px;
  height: 40px;
  background: none;
  background-color: ${COLOR_CHAMBRAY.HEX};
  font-size: 1rem;
  font-family: inherit;
  line-height: ${pxToRem(19)};
  color: white;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: inset -999px 0 rgba(255, 255, 255, 0.075);
  }

  &:active {
    transform: scale(0.975);
  }
`;

const Button: React.FC<Props> = ({ type, children, ...rest }) => {
  return (
    <StyledButton type={type ?? "button"} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
