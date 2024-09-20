import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import { useLang } from "../context/LocalizationContext";
import { useDispatch } from "react-redux";
import { setLangValues } from "../features/localization/localizationSlice";
import { getNews } from "../features/news/newsSlice";

const Layout = ({ drawerModal, setDrawerModal }) => {
  const dispatch = useDispatch();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/public/news.json`
        );
        const data = await res.json();
        dispatch(getNews(data));
      } catch (err) {
        console.log(err);
      }
    };
    getNewsData();
  }, [dispatch]);

  useEffect(() => {
    setLang(localStorage.getItem("localization") || lang);
  }, [lang, setLang]);

  const setLanguageData = useCallback(
    async (lang) => {
      try {
        const response = await fetch(
          `http://localhost:3000/localization/${lang}.json`
        );
        const data = await response.json();
        dispatch(setLangValues({ lang, data }));
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    setLanguageData(lang);
  }, [lang, setLanguageData]);

  return (
    <>
      <Header drawerModal={drawerModal} setDrawerModal={setDrawerModal} />
      <Drawer drawerModal={drawerModal} setDrawerModal={setDrawerModal} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
