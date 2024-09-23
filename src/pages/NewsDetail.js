import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsDetailPage from "../styles/newsDetailPage.module.scss";
import NewsDetailHeader from "../components/NewsDetailHeader";
import NewsDetailContent from "../components/NewsDetailContent";
import { useLang } from "../context/LocalizationContext";
import { useSelector } from "react-redux";

const NewsDetail = ({ drawerModal }) => {
  const news = useSelector((state) => state.news);
  const { id } = useParams();
  const { lang } = useLang();

  const [newsDetailData, setNewsDetailData] = useState("");

  useEffect(() => {
    setNewsDetailData(news?.find((item) => item.id === id));
  }, [id, news]);

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

  if (!news?.length) {
    <h2> No News to show yet</h2>;
  } else {
    return (
      <main className={newsDetailPage.main}>
        <NewsDetailHeader
          title={newsDetailData && newsDetailData[lang]?.title}
          date={newsDetailData && newsDetailData[lang]?.date}
          newsDetailImage={newsDetailData && newsDetailData?.newsDetailImage}
        />
        <NewsDetailContent
          newsContent={newsDetailData && newsDetailData[lang]?.mdContent}
        />
      </main>
    );
  }
};

export default NewsDetail;
