import styled from "styled-components";

import { pxToRem } from "../../app/helpers";
import { COLOR_TEXT_SECONDARY } from "../../app/constants";

export const WizardContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 97px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 8px 16px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const IntroText = styled.span`
  white-space: nowrap;
  margin-right: 4px;
`;

export const SelectWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  flex-direction: row;
`;

export const FootNote = styled.small`
  font-size: ${pxToRem(12)};
  color: ${COLOR_TEXT_SECONDARY.HEX};
  margin-top: 10px;
  display: inline-block;
`;
