import { Header } from "../../components/header";
import { LandingBody } from "../../components/landing-body";
import { StyledlandingPage } from "./landing-page.styled";

export const LandingPage = () => {
  return (
    <StyledlandingPage>
      <Header />
      <LandingBody />
    </StyledlandingPage>
  );
};
