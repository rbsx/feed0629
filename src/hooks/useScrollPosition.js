import { useEffect, useState, useCallback } from "react";

function useScrollPosition() {
  let [isAtTop, setIsAtTop] = useState(true);
  let [isAtBottom, setIsAtBottom] = useState(false);
  let elem = document.getElementById("wrapper");

  let handleScroll = useCallback(() => {
    // Top:
    if (window.pageYOffset === 0 && !isAtTop) {
      setIsAtTop(true);
    } else if (window.pageYOffset > 0 && isAtTop) {
      setIsAtTop(false);
    }

    // Bottom:
    let reachedBottom =
      elem?.getBoundingClientRect().bottom <= window.innerHeight;
    if (reachedBottom && !isAtBottom) {
      setIsAtBottom(true);
    } else if (!reachedBottom && isAtBottom) {
      setIsAtBottom(false);
    }
  }, [isAtBottom, isAtTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    isAtTop,
    isAtBottom
  };
}

export default useScrollPosition;
