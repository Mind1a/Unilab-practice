import { Header } from "../../components/header";
import { LandingBody } from "../../components/landing-body";
import { StyledlandingPage } from "./landing-page.styled";
import { Footer } from "../../components/footer";

export const LandingPage = () => {
  return (
    <StyledlandingPage>
      <Header />
      <LandingBody />
      <Footer />
    </StyledlandingPage>
  );
};
