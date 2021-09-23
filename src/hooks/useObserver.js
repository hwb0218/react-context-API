import React, { useState, useEffect, useCallback } from "react";

const useObserver = (target) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const onIntersect = useCallback(([entry]) => {
    setIntersecting(entry.isIntersecting);
  }, []);

  const options = {
    root: null,
    rootMargin: "200px",
    threshold: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);
    if (target.current) observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target, onIntersect]);

  return isIntersecting;
};

export default useObserver;
