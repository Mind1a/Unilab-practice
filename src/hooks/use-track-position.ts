import { useLayoutEffect, useState } from "react";

export const useTrackPosition = ({ ref, trackScroll = false }) => {
  const [boundaries, setBoundaries] = useState(
    ref?.current?.getBoundingClientRect() ?? null,
  );

  useLayoutEffect(() => {
    setBoundaries(ref?.current?.getBoundingClientRect() ?? null);
  }, [trackScroll]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setBoundaries(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", handleResize);
    if (trackScroll) {
      window.addEventListener("scroll", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (trackScroll) {
        window.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  return boundaries;
};
