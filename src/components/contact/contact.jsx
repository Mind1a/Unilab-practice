import { useState } from "react";
import { PopUp } from "../pop-up";
import { Button } from "../button";
import { StyledContact } from "./contact.styled";

import { PhoneIcon } from "../../assets/phone-icon";

export const Contact = () => {
  const [toggle, setToggle] = useState(false);

  const toggleUserProfile = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <StyledContact>
        <Button
          type="button"
          content={
            <>
              <PhoneIcon />
              Call Me Back
            </>
          }
          onClick={() => console.log("clicked")}
          FontWeight={"regular"}
          fontSize={"base"}
          color={"var(--clr-red-500)"}
          backgroundColor={"var(--clr-red-200)"}
        />
        <span className="phone">8 800 437-87-22</span>

        <button className="user" onClick={toggleUserProfile}>
          <img src="/src/assets/user.png" alt="" />
        </button>
      </StyledContact>
      {toggle && <PopUp />}
    </>
  );
};
