import React, { useState } from "react";
import styles from "./styles.module.scss";
import SideBarListItem from "./SideBarListItem";
import Loading from "../../Loading";

const SideBarList = ({ lists }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById(e.target.href?.split("#")[1]);
    setActiveLink(elem?.id);
    if (elem) {
      window.scrollTo({
        top: elem.getBoundingClientRect().top + window.scrollY - 100,
      });
    }
  };

  if (lists.length === 0) {
    return (
      <div className={styles.loading}>
        Loading <Loading width={10} height={10} />
      </div>
    );
  }
  return (
    <div className={styles.listsWrapper}>
      <ul className={styles.lists}>
        {lists?.map((list) => {
          const { id, href, text } = list;
          return (
            <SideBarListItem
              key={id}
              href={href}
              text={text}
              isActive={activeLink === href?.slice(1)}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarList;
