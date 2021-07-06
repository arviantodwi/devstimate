import styled from "styled-components";

import { bp } from "../../app/helpers";
import { COLUMN_GAP } from "../../app/constants";

type Props = {
  size?: number | "auto";
  gapless?: boolean;
};

/**
 * Calculate column max width in percentage based on passed size.
 * @param {number} size Column size
 * @returns {string} Percentage
 */
const calcMaxWidthPercentageBySize = (size: number): string => {
  return `${(size / 12) * 100}%`;
};

const StyledColumn = styled(({ size, gapless, ...rest }) => <div {...rest} />)`
  display: flex;
  flex-direction: column;

  ${({ size }) => {
    if (size !== "auto") {
      const maxWidth = calcMaxWidthPercentageBySize(size);
      return `
        flex: none;
        width: ${maxWidth};
      `;
    }

    return `flex: 1 0 0;`;
  }}

  ${({ gapless }) => {
    if (gapless) {
      return `
        padding-left: 0;
        padding-right: 0;
      `;
    }

    return `
      padding-left: ${COLUMN_GAP}px;
      padding-right: ${COLUMN_GAP}px;
    `;
  }}

  @media screen and ${bp("s")} {
    flex: none;
    width: 100%;
  }
`;

/**
 * Column component
 * @param {number} size
 * @returns React Function Component
 */
const Column: React.FC<Props> = ({ size, gapless, children, ...rest }) => {
  return (
    <StyledColumn
      size={size ?? "auto"}
      gapless={gapless ?? false}
      data-component="column"
      {...rest}
    >
      {children}
    </StyledColumn>
  );
};

export default Column;
