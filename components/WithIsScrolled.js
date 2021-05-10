import { useEffect, useState } from "react";

const WithIsScrolled = props => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.body != undefined ? document.body.scrollTop : 0;
      const newIsScrolled = (window.pageYOffset || scrollTop) > 50;

      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  });

  return props.children({ isScrolled });
};

export default WithIsScrolled;
