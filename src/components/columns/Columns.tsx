import styled from "styled-components";

import { BP_MEDIUM_MIN, COLUMN_GAP } from "../../app/constants";

type Props = {};

const StyledColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: -${COLUMN_GAP}px;
  margin-right: -${COLUMN_GAP}px;

  @media screen and (min-width: ${BP_MEDIUM_MIN}px) {
    flex-direction: row;
  }
`;

const Columns: React.FC<Props> = ({ children }) => {
  return <StyledColumns data-component="columns">{children}</StyledColumns>;
};

export default Columns;
