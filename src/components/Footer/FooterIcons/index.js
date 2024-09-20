import React from "react";
import styles from "./styles.module.scss";
import YoutubeIcon from "../../SvgIcons/YoutubeIcon";
import InstagramIcon from "../../SvgIcons/InstagramIcon";
import TwitterIcon from "../../SvgIcons/TwitterIcon";
import FacebookIcon from "../../SvgIcons/facebookIcon";
import LinkedlnIcon from "../../SvgIcons/LinkedlnIcon";

const FooterIcons = ({ color }) => {
  return (
    <div className={styles.icons}>
      <a
        href="https://www.google.com.tr/?hl=tr"
        rel="noreferrer"
        target={"_blank"}
      >
        <YoutubeIcon color={color} />
      </a>
      <a
        href="https://www.google.com.tr/?hl=tr"
        rel="noreferrer"
        target={"_blank"}
      >
        <FacebookIcon color={color} />
      </a>
      <a
        href="https://www.google.com.tr/?hl=tr"
        rel="noreferrer"
        target={"_blank"}
      >
        <InstagramIcon color={color} />
      </a>
      <a
        href="https://www.google.com.tr/?hl=tr"
        rel="noreferrer"
        target={"_blank"}
      >
        <TwitterIcon color={color} />
      </a>

      <a
        href="https://www.google.com.tr/?hl=tr"
        rel="noreferrer"
        target={"_blank"}
      >
        <LinkedlnIcon color={color} />
      </a>
    </div>
  );
};

export default FooterIcons;
