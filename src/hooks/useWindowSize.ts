import { useState, useEffect } from "react";

const WIDE_SCREEN_BREAKPOINT = 768;

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isWideScreen: windowSize > WIDE_SCREEN_BREAKPOINT };
}
