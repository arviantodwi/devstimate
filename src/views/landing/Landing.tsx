import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Wizard from "../../features/wizard";
import logo from "../../assets/images/logo.svg";
import Container from "../../components/container";
import happyGuy from "../../assets/images/happy-guy.svg";
import Columns, { Column } from "../../components/columns";
import {
  ViewContainer,
  Nav,
  NavWrapper,
  Logo,
  Content,
  ContentWrapper,
  Article,
  Heading,
  Paragraph,
  Illustration,
  Footer,
  FooterWrapper,
  Attribution,
  LinksWrapper,
} from "./style";

const Landing = () => {
  const { t } = useTranslation();
  const articleBodyTexts: string[] = t("landing.body", { returnObjects: true });

  return (
    <ViewContainer>
      <Nav>
        <NavWrapper as={Container}>
          <Link to="/">
            <Logo as={"h1"}>
              DEVstimate
              <img src={logo} alt="Devstimate logo" />
            </Logo>
          </Link>
        </NavWrapper>
      </Nav>

      <Content as={Container}>
        <Columns>
          <ContentWrapper as={Column} size={6}>
            <Article>
              <Heading as={"h2"}>{t("landing.heading")}</Heading>

              {articleBodyTexts.map((text, i) => (
                <Paragraph
                  key={`landing.body.${i + 1}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </Article>

            <Wizard />
          </ContentWrapper>

          <Illustration as={Column} size={6} gapless>
            <img
              src={happyGuy}
              alt="Illustration of a guy happily planning his project"
              title="Illustration by Freepik"
            />
          </Illustration>
        </Columns>
      </Content>

      <Footer>
        <FooterWrapper as={Container}>
          <Attribution>
            &copy; DEVstimate {new Date().getFullYear()} by Arvianto Dwi.
            Distributed as part of{" "}
            <abbr title="Free and open-source software">FOSS</abbr> and will
            always be free.
          </Attribution>

          <LinksWrapper>
            <a href="#!">GPL-3.0 License</a>
            <span> &middot; </span>
            <a href="#!">Open Source License</a>
            <span> &middot; </span>
            <span>
              <i title="Indonesia">🇮🇩</i>
            </span>
          </LinksWrapper>
        </FooterWrapper>
      </Footer>
    </ViewContainer>
  );
};

export default Landing;
