import { Heading } from "../heading";
import { StyledLandingBody } from "./landing-body.styled";
import { Link } from "react-router-dom";

export const LandingBody = () => {
  return (
    <StyledLandingBody>
      <Heading
        content={"Make Your Burger"}
      />
      <div>
        <Link to={"/process"}>MAKE BURGER</Link>
      </div>
    </StyledLandingBody>
  );
};