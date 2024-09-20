import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLang } from "../context/LocalizationContext";

const Layout = ({ drawerModal, setDrawerModal }) => {
  const dispatch = useDispatch();
  const { lang, setLang } = useLang();
  return (
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
};

export default Layout;
