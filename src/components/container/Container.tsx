import styled from "styled-components";

import { bp } from "../../app/helpers";
import {
  BP_LARGE_MIN,
  BP_MEDIUM_MIN,
  BP_XLARGE_MIN,
  COLUMN_GAP,
} from "../../app/constants";

type Props = {
  fluid?: boolean;
};

const nonFluidResponsive = `
  @media screen and ${bp("m")} {
    max-width: ${BP_MEDIUM_MIN}px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${bp("l")} {
    max-width: ${BP_LARGE_MIN}px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${bp("xl")} {
    max-width: ${BP_XLARGE_MIN}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledContainer = styled(({ fluid, ...rest }) => <div {...rest} />).attrs(
  ({ fluid }) => ({ fluid: fluid })
)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: ${COLUMN_GAP}px;
  padding-right: ${COLUMN_GAP}px;

  ${({ fluid }) => !fluid && nonFluidResponsive}
`;

const Container: React.FC<Props> = ({ fluid = false, children, ...rest }) => {
  return (
    <StyledContainer fluid={fluid} data-component="container" {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;
