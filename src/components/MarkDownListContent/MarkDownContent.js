import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../context/LocalizationContext";

const MarkDownContent = ({ id, setLists }) => {
  const [post, setPost] = useState("");
  const { lang } = useLang();

  const navigate = useNavigate();

  useEffect(() => {
    import(`../../markdown/${id}.${lang}.md`)
      .then((res) => {
        return fetch(res.default)
          .then((res) => res.text())
          .then((data) => setPost(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        return navigate("*");
      });
  }, [id, navigate, lang]);

  useEffect(() => {
    const sideBarListsContent = Array.from(document.querySelectorAll("h4"));
    console.log(sideBarListsContent);
    let listsArray = sideBarListsContent?.reduce((acc, cur, index) => {
      const list = {};
      list.id = index + 1;
      list.href = `#${cur.id}`;
      list.text = cur.innerText;
      acc.push(list);
      return acc;
    }, []);
    setLists(listsArray);
  }, [post, setLists]);
  return (
    <div className={styles.markDownContent}>
      <>
        <Markdown
          options={{
            forceBlock: true,
            wrapper: "section",
            overrides: {
              p: {
                props: {
                  className: `${styles.paragraf} paragrafLight`,
                },
              },

              a: {
                props: {
                  className: styles.link,
                },
              },
              h4: {
                props: {
                  className: styles.title,
                },
              },
              h6: {
                props: {
                  className: styles.subTitle,
                },
              },
              li: {
                props: {
                  className: "paragrafLight",
                },
              },
              table: {
                props: {
                  className: styles.table,
                },
              },
            },
          }}
        >
          {post}
        </Markdown>
      </>
    </div>
  );
};

export default MarkDownContent;
