import { configureStore } from "@reduxjs/toolkit";
import localizationSlice from "../features/localization/localizationSlice";
import newsSlice from "../features/news/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    localization: localizationSlice,
  },
});
