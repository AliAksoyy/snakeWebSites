import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../context/LocalizationContext";

const MarkDownContent = ({ id, setLists }) => {
  const [post, setPost] = useState("");
  const { lang } = useLang();

  const navigate = useNavigate();

  useEffect(() => {});
  return <div>MarkDownContent</div>;
};

export default MarkDownContent;
