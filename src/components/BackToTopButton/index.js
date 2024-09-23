import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const BackToTopButton = () => {
  const backToTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        backToTopRef.current.classList.add(styles.show);
        backToTopRef.current.classList.remove(styles.hide);
      } else {
        backToTopRef.current.classList.remove(styles.show);
        backToTopRef.current.classList.add(styles.hide);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.backTop} ${styles.hide}`}
      ref={backToTopRef}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="#41AEEF" />
        <g clipPath="url(#clip0_904_15152)">
          <path
            d="M15 19L20 14M20 14L25 19M20 14V26"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_904_15152">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(12 12)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackToTopButton;
