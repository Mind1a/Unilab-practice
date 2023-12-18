import { Heading } from "../heading";
import { StyledLandingBody } from "./landing-body.styled";
import { Link } from "react-router-dom";
import burger_image from "../../assets/burger-assets/body-landing-burger.png";

export const LandingBody = () => {
  return (
    <StyledLandingBody>
      <Heading
        content={"Make Your Burger"}
      />
      <div className="image_container">
        <Link to={"/process"}>MAKE BURGER</Link>
        <img src={burger_image} alt="" />
      </div>
    </StyledLandingBody>
  );
};