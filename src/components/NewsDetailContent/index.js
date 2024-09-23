import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Markdown from "markdown-to-jsx";

const NewsDetailContent = ({ newsContent }) => {
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    const getMdNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/public/${newsContent}`
        );

        const data = await response.text();
        setMdContent(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMdNews();
  }, [newsContent, setMdContent]);

  return (
    <Markdown
      options={{
        forceBlock: true,
        wrapper: "div",
        overrides: {
          h6: {
            props: {
              className: styles.subTitle,
            },
          },
          p: {
            props: {
              className: `paragrafLight`,
            },
          },
        },
      }}
    >
      {mdContent}
    </Markdown>
  );
};

export default NewsDetailContent;
