import { RefObject, useCallback, useLayoutEffect, useState } from "react";

export const usePos = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null));

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return;
    }

    // Update client rect
    setRect(getRect(ref.current));
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    handleResize();

    if (typeof ResizeObserver === "function") {
      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(element);

      return () => {
        if (!resizeObserver) {
          return;
        }

        resizeObserver.disconnect();
      };
    } else {
      // Browser support, remove freely
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [ref, handleResize]);

  return rect;
};

const getRect = (element: HTMLElement | null) => {
  if (!element) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    };
  }

  return element.getBoundingClientRect();
};
