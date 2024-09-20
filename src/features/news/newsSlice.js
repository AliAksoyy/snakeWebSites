import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    getNews: (state, { payload }) => {
      return payload;
    },
  },
});

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
