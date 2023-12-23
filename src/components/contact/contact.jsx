import { Button } from "../button";
import { StyledContact } from "./contact.styled";

import { PhoneIcon } from "../../assets/phone-icon";
import { User } from "../user";

export const Contact = () => {
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
          background={"var(--clr-red-200)"}
        />
        <span className="phone">8 800 437-87-22</span>

        <User />
      </StyledContact>
    </>
  );
};
