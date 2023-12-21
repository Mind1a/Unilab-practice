import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../modal";
import { UserPopUp } from "./user-pop-up";

import { SUser, SUserButton } from "./user.styled";
import userImage from "../../assets/user.png";

export const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRef = useRef(null);

  return (
    <SUser>
      <SUserButton
        ref={userRef}
        aria-label="Open profile menu"
        aria-haspopup="true"
        aria-expanded={isModalOpen}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={userImage} alt="User picture" />
      </SUserButton>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            closeOnBackdropClick={true}
          >
            <UserPopUp onClose={() => setIsModalOpen(false)} ref={userRef} />
          </Modal>
        )}
      </AnimatePresence>
    </SUser>
  );
};
