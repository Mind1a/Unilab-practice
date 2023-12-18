import { Heading } from "../heading";
import { SLandingBody, SImageContainer } from "./landing-body.styled";
import { Link } from "react-router-dom";
import burger_image from "../../assets/burger-assets/body-landing-burger.png";

export const LandingBody = () => {
  return (
    <SLandingBody>
      <Heading
        content={"Make Your Burger"}
      />
      <SImageContainer>
        <Link to={"/process"}>MAKE BURGER</Link>
        <img src={burger_image} alt="" />
      </SImageContainer>
    </SLandingBody>
  );
};