import { motion } from "framer-motion";
import { forwardRef, useRef } from "react";
import { SUserPopup } from "./user-pop-up.styled";
import { useTrackPosition } from "../../hooks/use-track-position";
import { NavLink } from "react-router-dom";
import { TriangleIcon } from "../../assets/triangle-icon";

const MotionPopup = motion(SUserPopup);

export const UserPopUp = forwardRef(function UserPopup({ onClose }, ref) {
  const boundaries = useTrackPosition({
    ref,
    trackScroll: true,
  });

  const popupRef = useRef(null);

  const styles = {
    position: "fixed",
    top: boundaries?.top + boundaries?.height + 20,
    left: boundaries?.left + boundaries?.width - popupRef?.current?.clientWidth,
  };

  return (
    <MotionPopup
      ref={popupRef}
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
        duration: 0.2,
      }}
      style={styles}
    >
      <TriangleIcon />

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
