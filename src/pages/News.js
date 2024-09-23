import React, { useEffect, useState } from "react";
import newsPageStyles from "../styles/newsPageStyles.module.scss";
import NewsHeader from "../components/NewsHeader";
import NewsContent from "../components/NewsContent";
import NewsPagination from "../components/NewsPagination";
import { useLang } from "../context/LocalizationContext";
import { useSelector } from "react-redux";

const News = ({ drawerModal }) => {
  const news = useSelector((state) => state.news);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const { lang } = useLang();

  const newsLength = news?.length;

  useEffect(() => {
    if (drawerModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerModal]);

  return (
    <main className={newsPageStyles.main}>
      <NewsHeader />
      {news?.length > 0 ? (
        <>
          <NewsContent
            newsData={news}
            page={page}
            rowsPerPage={rowsPerPage}
            lang={lang}
          />
          <NewsPagination
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            dataLength={newsLength}
          />
        </>
      ) : (
        <p className="subtitleLight">No News to show yet</p>
      )}
    </main>
  );
};

export default News;
