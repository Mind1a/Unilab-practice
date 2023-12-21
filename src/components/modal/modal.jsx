import { motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { SModal } from "./modal.styled";

const MotionModal = motion(SModal);

export const Modal = ({ children, onClose, background }) => {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);
  const focusableElementsSelector =
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = Array.from(
          modal.querySelectorAll(focusableElementsSelector),
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement =
          focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    },
    [onClose],
  );

  useLayoutEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = Array.from(
      modal.querySelectorAll(focusableElementsSelector),
    );
    const firstFocusableElement = focusableElements?.[0];

    previouslyFocusedElement.current = document.activeElement;

    modal?.addEventListener("keydown", handleKeyDown);
    firstFocusableElement?.focus();

    return () => {
      modal?.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [onClose, handleKeyDown]);

  return createPortal(
    <MotionModal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={modalRef}
      onClick={(e) => {
        e.stopPropagation();
        if (e.currentTarget === e.target) onClose();
      }}
      id="dialog"
      role="dialog"
      aria-modal="true"
    >
      {children}
    </MotionModal>,
    document.body,
  );
};
