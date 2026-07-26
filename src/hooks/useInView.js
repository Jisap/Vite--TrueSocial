import { useEffect, useRef, useState } from "react";


/**
 * Returns a ref to attach to an element and a boolean that flips to
 * `true` the first time that element enters the viewport. Used to
 * trigger scroll-reveal animations and count-up numbers exactly once,
 * replacing the original theme's jquery.appear + WOW.js combination.
 */

const useInView = ({ threshold = 0.25, rootMargin = "0px" }) => {

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If the browser can't do IntersectionObserver, just show content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    // observer only need to be set up once, when the component mounts
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect()
        }
      }, {
      threshold,
      rootMargin
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin])

  return (inView, ref)
}

export default useInView