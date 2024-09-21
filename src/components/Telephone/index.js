import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TabletContainer from "./TabletContainer";
import TelephoneContainer from "./TelephoneContainer";
import PcContainer from "./PcContainer";

const Telephone = () => {
  const [containerWidth, setContainerWidth] = useState();

  const handleResize = () => {
    setContainerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerWidth]);

  useEffect(() => {
    handleResize();
  }, []);

  const renderContainer = () => {
    if (containerWidth < 673) return <TelephoneContainer />;
    else if (containerWidth < 1023) return <TabletContainer />;
    else return <PcContainer />;
  };

  return (
    <section id="telephone" className={styles.container}>
      {renderContainer()}
    </section>
  );
};

export default Telephone;
