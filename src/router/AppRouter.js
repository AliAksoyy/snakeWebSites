import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import MarkDownRenderPage from "../pages/MarkDownRenderPage";
import AccomplishedResetPassword from "../pages/AccomplishedResetPassword";
import ResetPassword from "../pages/ResetPassword";
import LinkExpired from "../pages/LinkExpired";

const AppRouter = () => {
  const [drawerModal, setDrawerModal] = useState(false);

  return (
    <Routes>
      <Route
        element={
          <Layout drawerModal={drawerModal} setDrawerModal={setDrawerModal} />
        }
      >
        <Route path="/" element={<Home drawerModal={drawerModal} />} />
        <Route
          path="/mdRender/:id"
          element={<MarkDownRenderPage drawerModal={drawerModal} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News drawerModal={drawerModal} />} />
        <Route
          path="/news/:id"
          element={<NewsDetail drawerModal={drawerModal} />}
        />
        <Route
          path="/accomplishedPassword"
          element={<AccomplishedResetPassword />}
        />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="/contact"
          element={<ContactUs drawerModal={drawerModal} />}
        />
        <Route path="/linkExpired" element={<LinkExpired />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
