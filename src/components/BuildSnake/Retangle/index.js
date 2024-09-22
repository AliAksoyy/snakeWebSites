import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Retangle = ({ children }) => {
  const [activeRect, setActiveRect] = useState(0);

  useEffect(() => {
    const interValId = setInterval(() => {
      setActiveRect((a) => {
        return a + 1;
      });
    }, 200);

    return () => {
      clearInterval(interValId);
    };
  }, []);

  useEffect(() => {
    const rects = Array.from(document.getElementsByClassName(styles.rect));

    rects.forEach((rect) => rect.classList.remove(styles.active));

    for (let i = 0; i < 4; i++) {
      rects[i + activeRect]
        ? rects[i + activeRect].classList.add(styles.active)
        : rects[i + activeRect - rects.length].classList.add(styles.active);
    }

    if (activeRect >= rects.length) {
      setActiveRect((a) => 0);
    }
  }, [activeRect]);

  return (
    <div className={styles.rectangles}>
      <div className={styles.rectContainer}>
        {new Array(5).fill(0).map((_item, index) => (
          <span key={index} className={styles.rect}></span>
        ))}
      </div>
      {children}
      <div className={styles.rectContainer}>
        {new Array(5).fill(0).map((_item, index) => (
          <span key={index} className={styles.rect}></span>
        ))}
      </div>
    </div>
  );
};

export default Retangle;
