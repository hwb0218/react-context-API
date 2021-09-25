import { useState, useEffect, useCallback } from "react";

const useObserver = (target) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [stopIntersecting, setStopIntersecting] = useState(false);

  const onIntersect = useCallback(
    ([entry]) => {
      if (stopIntersecting) return;
      setIntersecting(entry.isIntersecting);
    },
    [stopIntersecting]
  );

  const options = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);
    if (target.current) observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target, onIntersect]);

  return { isIntersecting, stopIntersecting, setStopIntersecting };
};

export default useObserver;
