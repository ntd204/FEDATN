import React, { useEffect, useRef } from "react";

const Ad = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset >= 0) {
        navRef.current.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 20;
                    `;
      } else {
        navRef.current.style.cssText = `
                    width: 100%
                    `;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className="w-full">
      <a
        href="https://bds123.vn/"
        className="absolute left-[250px] top-[310px]"
      >
        <img src="https://phongtro123.com/images/bds123_120_300.gif" />
      </a>

      <a
        href="https://thuecanho123.com/"
        className="absolute right-[250px] top-[310px] w-[120px] h-[300px]"
      >
        <img src="	https://phongtro123.com/images/banner-thuecanho.jpg" />
      </a>
    </div>
  );
};

export default Ad;
