import { Heading } from "../heading";
import {
  SLandingBody,
  SImageContainer,
  SHeroContainer,
  SImage,
} from "./landing-body.styled";
import { Link } from "react-router-dom";

export const LandingBody = () => {
  return (
    <SLandingBody>
      <SHeroContainer>
        <Heading>
          <span>Make </span>
          Your Burger
        </Heading>
        <p>
          Parallax screen. Burger ingredients and emojis moving depending on the
          position of the mouse pointer.
        </p>
      </SHeroContainer>
      <SImageContainer>
        <Link to={"/process"}>MAKE BURGER</Link>
        <SImage alt="burger" />
      </SImageContainer>
    </SLandingBody>
  );
};
