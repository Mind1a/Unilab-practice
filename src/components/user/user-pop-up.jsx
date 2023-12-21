import { motion } from "framer-motion";
import { forwardRef } from "react";
import { SUserPopup } from "./user-pop-up.styled";
import { useTrackPosition } from "../../hooks/use-track-position";
import { NavLink } from "react-router-dom";

const MotionPopup = motion(SUserPopup);

export const UserPopUp = forwardRef(function UserPopup({ onClose }, ref) {
  const boundaries = useTrackPosition({
    ref,
    trackScroll: true,
  });

  const styles = {
    position: "fixed",
    top: boundaries?.top + boundaries?.height + 20,
    left: boundaries?.left + boundaries?.width,
    transform: "translateX(-100%)",
  };

  return (
    <MotionPopup
      initial={{
        height: 0,
      }}
      animate={{
        height: "auto",
      }}
      exit={{
        height: 0,
      }}
      transition={{
        duration: 0.1,
      }}
      style={styles}
    >
      <h2>Jerome Porter</h2>
      <ul className="links">
        <Link href="#" title="Profile" onClick={onClose} />
        <Link href="#" title="Settings" onClick={onClose} />
        <Link href="#" title="Log out" onClick={onClose} />
      </ul>
    </MotionPopup>
  );
});

const Link = ({ title, href, onClick }) => {
  return (
    <NavLink to={href} onClick={onClick} className="link">
      {title}
    </NavLink>
  );
};
