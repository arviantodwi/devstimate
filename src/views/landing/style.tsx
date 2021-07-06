import styled from "styled-components";

import { pxToRem } from "../../app/helpers";
import {
  COLOR_TEXT_LINK,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_STRONG,
  COLUMN_GAP,
} from "../../app/constants";

export const ViewContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Nav = styled.nav`
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const NavWrapper = styled.nav`
  height: 40px;
  align-items: center;
`;

export const Logo = styled.span`
  margin: 0;
  font-size: 0;
  display: inline-block;
  vertical-align: top;
`;

export const Content = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 97px;
  position: relative;
`;

export const Article = styled.article``;

export const Heading = styled.h1`
  font-size: ${pxToRem("38px")};
  font-weight: 700;
  line-height: ${pxToRem("46px")};
  color: ${COLOR_TEXT_STRONG.HEX};
  margin: 23px 0;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: ${pxToRem("23px")};
  color: ${COLOR_TEXT_SECONDARY.HEX};
  margin: ${pxToRem("19px")} 0;
`;

export const Illustration = styled.div`
  padding-right: ${COLUMN_GAP}px;

  > img {
    align-self: center;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Footer = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(17)};
  color: ${COLOR_TEXT_PRIMARY};
`;

export const FooterWrapper = styled.div`
  flex-direction: column;
`;

export const Attribution = styled.div`
  margin-bottom: 4px;
`;

export const LinksWrapper = styled.div`
  > a {
    color: ${COLOR_TEXT_LINK.HEX};
    text-decoration: underline;
    display: inline;
    vertical-align: baseline;
  }

  > span {
    display: inline;
    vertical-align: baseline;

    > i {
      font-style: normal;
    }
  }
`;
